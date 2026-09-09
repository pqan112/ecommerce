import { Module } from '@nestjs/common'
import { APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { PinoLoggerModule } from './configs/logger/logger.module.js'
import { AppThrottlerModule } from './configs/throttler/throttler.module.js'
import CustomZodValidationPipe from './pipes/custom-zod-validation.pipe.js'
import { ThrottlerGuard } from '@nestjs/throttler'
import { TestModule } from './test/test.module.js';

@Module({
  imports: [PinoLoggerModule, AppThrottlerModule, TestModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: CustomZodValidationPipe,
    },
    { provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
