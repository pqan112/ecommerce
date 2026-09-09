import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module.js'
import { VersioningType } from '@nestjs/common'
import cookieParser from 'cookie-parser'
import envConfig from './configs/env.config.js'
import { parseEnvOrigins } from './utils/parse-env-origins.js'
import { Logger } from 'nestjs-pino'

const getCorsAllowList = () => {
  return parseEnvOrigins(envConfig.CLIENT_URL, envConfig.CORS_OTHER_URL)
}

async function bootstrap() {
  // setup logger
  const app = await NestFactory.create(AppModule, { bufferLogs: true })
  app.useLogger(app.get(Logger))

  // read cookies
  app.use(cookieParser())

  const logger = app.get(Logger)
  const allowList = getCorsAllowList()
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

  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })
  const port = envConfig.PORT
  await app.listen(port)
  logger.log(`App is running on port: ${port}`)
}
await bootstrap()
