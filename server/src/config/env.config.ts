import z from 'zod'
import fs from 'fs'
import path from 'path'

export const envFile =
  process.env.NODE_ENV === 'production'
    ? ['.env.prod', '.env']
    : ['.env.dev', '.env']

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
  CORS_OTHER_URL: z.string().trim().optional(),
  CLIENT_URL: z.string().trim().min(1),
  // database
  DB_HOST: z.string().trim().min(1),
  DB_PORT: z.coerce.number().min(1).max(65535),
  DB_USERNAME: z.string().trim().min(1),
  DB_PASSWORD: z.string().trim().min(1),
  DB_NAME: z.string().trim().min(1),
  DB_POOL_MAX: z.coerce.number().default(10),
  DB_POOL_MIN: z.coerce.number().default(2),
  DB_POOL_CONNECTION_TIMEOUT_MS: z.coerce.number().default(5000),
  DB_POOL_IDLE_TIMEOUT_MS: z.coerce.number().default(30000),
  // throtller
  THROTTLE_TTL_MS: z.coerce.number().default(1000),
  THROTTLE_LIMIT: z.coerce.number().default(20),
  THROTTLE_BLOCK_DURATION: z.coerce.number().default(5000),
  // email (SMTP)
  SMTP_USER: z.email(),
  SMTP_PASS: z.string().min(1),
  SMTP_FROM: z.email(),
  // internal API
  INTERNAL_API_SECRET: z.string().min(1),
})

export type Env = z.infer<typeof configSchema>

// Called once by Nest's ConfigModule (`validate` option), which already merges
// the parsed `envFilePath` files into `process.env` before invoking this.
export function validateEnv(config: Record<string, unknown>): Env {
  const result = configSchema.safeParse(config)
  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `- ${issue.path.join('.')}: ${issue.message}`)
      .join('\n')
    throw new Error(`Invalid env configuration:\n${issues}`)
  }
  return result.data
}

// Nest writes the validated env back onto `process.env`
// before instantiating any `load` factories,
// `registerAs` factories can safely re-derive typed,
// coerced values from it.
// Memoized so the schema is only re-parsed once.
let cachedEnv: Env | undefined
export function getEnv(): Env {
  cachedEnv ??= validateEnv(process.env)
  return cachedEnv
}
