import { betterAuth } from 'better-auth'
import { nextCookies } from 'better-auth/next-js'
import { bearer } from 'better-auth/plugins'
import { Pool } from 'pg'
import { v7 as uuidv7 } from 'uuid'
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
} from './send-auth-email'

function getAppUrl(): string {
  const url =
    process.env.BETTER_AUTH_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    'http://localhost:3000'
  return url.trim().replace(/\/+$/, '')
}

const appUrl = getAppUrl()

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  user: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'ecom',
  max: 20,
  min: 2,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
})

export const auth = betterAuth({
  database: pool,
  plugins: [bearer(), nextCookies()],
  emailAndPassword: {
    enabled: true,
    // bắt buộc verfiy thì mới đăng nhập được
    requireEmailVerification: true,
    sendResetPassword: async ({ user, token }) => {
      const resetPasswordUrl = `${appUrl}/auth/reset-password?token=${encodeURIComponent(token)}`
      await sendPasswordResetEmail(user.email, user.name, resetPasswordUrl)
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
    expiresIn: 24 * 60 * 60,
    sendVerificationEmail: async ({ user, token }) => {
      const verifyUrl = `${appUrl}/auth/verify-email?token=${encodeURIComponent(token)}&email=${encodeURIComponent(user.email)}`
      await sendVerificationEmail(user.email, user.name, verifyUrl)
    },
  },
  secret: process.env.BETTER_AUTH_SECRET || '',
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  basePath: '/api/auth',
  user: {
    fields: {
      emailVerified: 'email_verified',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },

  // nếu dùng liên tục không rời app quá 24h, giữ session cũ thì sau 7 ngày phải đăng nhập lại
  // nếu vài ngày mới vào app, cập nhật session mới, hạn sử dụng 7 ngày sẽ được đếm lại từ đầu
  // -> updateAge nên để 1 ngày để better auth không cập nhật quá nhiều session mới vào database
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
    fields: {
      userId: 'user_id',
      expiresAt: 'expires_at',
      ipAddress: 'ip_address',
      userAgent: 'user_agent',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },

  account: {
    fields: {
      userId: 'user_id',
      accountId: 'account_id',
      providerId: 'provider_id',
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
      accessTokenExpiresAt: 'access_token_expires_at',
      refreshTokenExpiresAt: 'refresh_token_expires_at',
      idToken: 'id_token',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },

  verification: {
    fields: {
      expiresAt: 'expires_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },

  advanced: {
    database: {
      generateId: () => uuidv7(),
    },
  },
})
