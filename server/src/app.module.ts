import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ThrottlerGuard } from '@nestjs/throttler'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { allConfigs } from './config/configuration.js'
import { envFile, validateEnv } from './config/env.config.js'
import { PinoLoggerModule } from './config/logger/logger.module.js'
import { AppThrottlerModule } from './config/throttler/throttler.module.js'
import { AllExceptionFilter } from './core/filters/all-exceptions.filter.js'
import { CorrelationIdMiddleware } from './core/middlewares/correlation-id.middleware.js'
import CustomZodValidationPipe from './core/pipes/custom-zod-validation.pipe.js'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfigService } from './config/database/typeorm-config.service.js'
import { UserModule } from './app/user/user.module.js';
import { AuthModule } from './app/auth/auth.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),

    PinoLoggerModule,
    AppThrottlerModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
    AuthModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor },
    {
      provide: APP_PIPE,
      useClass: CustomZodValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*')
  }
}
