import { GetUserResponseSchema } from '@shared/models/user.model.js'
import { timestampSchema } from '@shared/utils/zod-date.schema.js'
import z from 'zod'

export const GetSessionResponseSchema = z.object({
  success: z.boolean(),
  authenticated: z.boolean(),
  session: z
    .object({
      token: z.string(),
      expiresAt: timestampSchema(),
    })
    .optional(),
  user: GetUserResponseSchema.optional(),
})

export const VerifyEmailResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
})

export const CheckAuthResponseSchema = z.object({
  authenticated: z.boolean(),
  user: GetUserResponseSchema.nullable(),
})
