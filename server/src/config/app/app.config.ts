import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config.js'
import { parseEnvOrigins } from '../../shared/utils/parse-env-origins.js'

export const APP_CONFIG = 'app'

export interface AppConfig {
  port: number
  corsOrigins: string[]
}

export default registerAs(APP_CONFIG, (): AppConfig => {
  const env = getEnv()
  return {
    port: env.PORT,
    corsOrigins: parseEnvOrigins(env.CLIENT_URL, env.CORS_OTHER_URL),
  }
})
