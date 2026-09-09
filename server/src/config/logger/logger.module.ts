import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { randomUUID } from 'crypto'
import { IncomingMessage } from 'http'
import { LoggerModule } from 'nestjs-pino'
import { CORRELATION_ID_HEADER } from '../../shared/constants/headers.constant.js'
import { Env } from '../env.config.js'

@Module({
  imports: [
    // logger with pino
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const nodeEnv = config.getOrThrow<Env['NODE_ENV']>('NODE_ENV')
        const isDev = nodeEnv === 'development'
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
            // add reqId
            genReqId: (req, res) => {
              const exsiting = req.headers[CORRELATION_ID_HEADER]
              const id = exsiting ?? randomUUID()
              // vì pino là 1 middleware và có ưu tiên cao hơn
              // cần truyền req.header xuống cho các middleware khác
              req.headers[CORRELATION_ID_HEADER] = id
              res.setHeader(CORRELATION_ID_HEADER, id)
              return id
            },
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
