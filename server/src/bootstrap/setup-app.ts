import { INestApplication, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import cookieParser from 'cookie-parser'
import { Logger } from 'nestjs-pino'
import { APP_CONFIG, AppConfig } from '@config/app/app.config.js'

export function setupApp(
  app: INestApplication,
  logger: Logger,
  config: ConfigService,
): void {
  // read cookies
  app.use(cookieParser())
  // CORS
  const appCfg = config.getOrThrow<AppConfig>(APP_CONFIG)
  const allowList = appCfg.corsOrigins
  logger.log(`CORS: ${allowList.length} allowed origin(s)`)
  app.enableCors({
    origin: (requestOrigin: string, callback) => {
      if (!requestOrigin) {
        callback(null, true)
        return
      }

      if (allowList.includes(requestOrigin)) {
        callback(null, true)
        return
      }
      logger.warn(
        `CORS: blocked request from origin ${requestOrigin} (not in allowList)`,
      )
      callback(null, false)
    },
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true, // allow send cookies to BE
  })

  // API versioning /api/v1/...
  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  // clean up all backend services
  app.enableShutdownHooks()
}
