import { Env } from '@config/env.config.js'
import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(
  app: INestApplication,
  config: ConfigService,
): void {
  const env = config.get<Env['NODE_ENV']>('NODE_ENV')
  if (env === 'production') {
    return
  }

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ecom API')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app, document)
}
