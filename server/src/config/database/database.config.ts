import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config.js'

export const DATABASE_CONFIG = 'database'

export interface DatabaseConfig {
  type: string
  host: string
  port: number
  username: string
  password: string
  database: string
  extra: {
    max: number
    min: number
    connectionTimeoutMillis: number
    idleTimeoutMillis: number
  }
}

export default registerAs(DATABASE_CONFIG, () => {
  const env = getEnv()
  return {
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    extra: {
      max: env.DB_POOL_MAX,
      min: env.DB_POOL_MIN,
      connectionTimeoutMillis: env.DB_POOL_CONNECTION_TIMEOUT_MS,
      idleTimeoutMillis: env.DB_POOL_IDLE_TIMEOUT_MS,
    },
  }
})
