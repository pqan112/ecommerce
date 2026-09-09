import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { Logger } from 'nestjs-pino'
import { AppModule } from './app.module.js'
import { setupApp } from './bootstrap/setup-app.js'
import { APP_CONFIG, AppConfig } from './config/app/app.config.js'

async function bootstrap() {
  // setup logger
  const app = await NestFactory.create(AppModule, { bufferLogs: true })
  app.useLogger(app.get(Logger))
  const logger = app.get(Logger)
  const config = app.get(ConfigService)
  setupApp(app, logger, config)
  const appCfg = config.getOrThrow<AppConfig>(APP_CONFIG)
  const port = appCfg.port
  await app.listen(port)
  logger.log(`App is running on port: ${port}`)
}
void bootstrap().catch((err) => {
  console.log('Bootstrap failed:', err)
  process.exit(1)
})
