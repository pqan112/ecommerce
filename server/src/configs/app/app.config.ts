import { registerAs } from '@nestjs/config'
import envConfig from '../env.config.js'
import { parseEnvOrigins } from '../../utils/parse-env-origins.js'

export const APP_CONFIG = 'app'

export default registerAs(APP_CONFIG, () => ({
  port: envConfig.PORT,
  corsOrigins: parseEnvOrigins(envConfig.CLIENT_URL, envConfig.CORS_OTHER_URL),
}))
