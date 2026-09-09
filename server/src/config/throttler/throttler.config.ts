import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config.js'

export const THROTTLER_CONFIG = 'throttler'

export interface ThrottlerConfig {
  ttl: number
  limit: number
  blockDuration: number
}

export default registerAs(THROTTLER_CONFIG, (): ThrottlerConfig => {
  const env = getEnv()
  return {
    ttl: env.THROTTLE_TTL_MS,
    limit: env.THROTTLE_LIMIT,
    blockDuration: env.THROTTLE_BLOCK_DURATION,
  }
})
