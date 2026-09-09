import { Module } from '@nestjs/common'
import { LoggerModule } from 'nestjs-pino'
import envConfig from '../env.config.js'
import { IncomingMessage } from 'http'

@Module({
  imports: [
    // logger with pino
    LoggerModule.forRootAsync({
      useFactory: () => {
        const isDev = envConfig.NODE_ENV === 'development'
        return {
          pinoHttp: {
            level: isDev ? 'debug' : 'info',
            transport: isDev
              ? {
                  target: 'pino-pretty',
                  options: {
                    colorize: true,
                    singleLine: true,
                    translateTime: 'SYS:standard',
                    ignore: 'pid,hostname',
                  },
                }
              : undefined,
            //   TODO: thêm reqId

            redact: {
              paths: [
                'req.headers.authorization',
                'res.headers.cookies',
                'req.body.password',
                'req.headers["set-cookie"]',
              ],
              censor: '**[REDACTED]**',
            },
            customProps: (req: IncomingMessage) => ({
              userId: (req as IncomingMessage & { user?: { id: string } }).user
                ?.id,
            }),
          },
        }
      },
    }),
  ],
  exports: [LoggerModule],
})
export class PinoLoggerModule {}
