import fs from 'fs'
import path from 'path'
import z from 'zod'
import { config } from 'dotenv'

const envFile =
  process.env.NODE_ENV === 'production'
    ? ['.env.prod', '.env']
    : ['.env.dev', '.env']

config({ path: envFile })

// Kiểm tra coi thử có file .env hay chưa
if (!fs.existsSync(path.resolve('.env'))) {
  console.log('Không tìm thấy file .env')
  process.exit(1)
}

const configSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(8080),
  CORS_OTHER_URL: z.string(),
  CLIENT_URL: z.string().min(1),
  DB_HOST: z.string().min(1).default('localhost'),
  DB_PORT: z.coerce.number().default(5432),
  DB_USERNAME: z.string().min(1).default('postgres'),
  DB_PASSWORD: z.string().min(1),
  DB_NAME: z.string().min(1).default('ecommerce'),
  THROTTLE_TTL_MS: z.coerce.number().default(1000),
  THROTTLE_LIMIT: z.coerce.number().default(20),
  THROTTLE_BLOCK_DURATION: z.coerce.number().default(5000),
})

export type Env = z.infer<typeof configSchema>

function validateEnv(): Env {
  const configServer = configSchema.safeParse(process.env)
  if (!configServer.success) {
    const issues = configServer.error.issues
      .map((issue) => `- ${issue.path.join('.')}: ${issue.message}`)
      .join('\n')
    throw new Error(`Invalid env configuration:\n${issues}`)
  }
  return configServer.data
}

const envConfig = validateEnv()
export default envConfig
