import { Module } from '@nestjs/common'
import { LoggerModule } from 'nestjs-pino'
import envConfig from '../env.config.js'
import { IncomingMessage } from 'http'
import { CORRELATION_ID_HEADER } from '../../shared/constants/headers.constant.js'
import { randomUUID } from 'crypto'

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
