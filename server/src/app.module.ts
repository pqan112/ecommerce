import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { PinoLoggerModule } from './config/logger/logger.module.js'
import { AppThrottlerModule } from './config/throttler/throttler.module.js'
import CustomZodValidationPipe from './core/pipes/custom-zod-validation.pipe.js'
import { ThrottlerGuard } from '@nestjs/throttler'
import { TestModule } from './test/test.module.js'
import { AllExceptionFilter } from './core/filters/all-exceptions.filter.js'
import { CorrelationIdMiddleware } from './core/middlewares/correlation-id.middleware.js'
import { ConfigModule } from '@nestjs/config'
import { envFile, validateEnv } from './config/env.config.js'
import appConfig from './config/app/app.config.js'
import throttlerConfig from './config/throttler/throttler.config.js'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: [appConfig, throttlerConfig],
    }),

    PinoLoggerModule,
    AppThrottlerModule,
    TestModule,
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
