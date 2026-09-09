import { registerAs } from '@nestjs/config'
import envConfig from '../env.config.js'

export const THROTTLER_CONFIG = 'throttler'

export default registerAs(THROTTLER_CONFIG, () => ({
  ttl: envConfig.THROTTLE_TTL_MS,
  limit: envConfig.THROTTLE_LIMIT,
  blockDuration: envConfig.THROTTLE_BLOCK_DURATION,
}))
