import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { THROTTLER_CONFIG, ThrottlerConfig } from './throttler.config.js'

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const cfg = config.getOrThrow<ThrottlerConfig>(THROTTLER_CONFIG)

        return {
          throttlers: [
            {
              name: 'default',
              ttl: cfg.ttl,
              limit: cfg.limit,
              blockDuration: cfg.blockDuration,
            },
          ],
        }
      },
    }),
  ],
  exports: [ThrottlerModule],
})
export class AppThrottlerModule {}
