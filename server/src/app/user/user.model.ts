import { Gender } from '@shared/types/gender.enum.js'
import { UserRole } from '@shared/types/user-role.enum.js'
import {
  dateOnlySchema,
  timestampSchema,
} from '@shared/utils/zod-date.schema.js'
import z from 'zod'

export const GetUserResponseSchema = z.object({
  id: z.uuidv7(),
  email: z.email(),
  name: z.string(),
  image: z.string().nullable(),
  emailVerified: z.boolean(),
  role: z.enum(UserRole),
  isAnonymous: z.boolean().default(false),
  phone: z.string().nullable(),
  birthday: dateOnlySchema().nullable(),
  gender: z.enum(Gender).nullable(),
  createdAt: timestampSchema(),
  updatedAt: timestampSchema(),
})

export const GetCurrentUserResponseSchema = z.object({
  success: z.boolean(),
  authenticated: z.boolean(),
  message: z.string().optional(),
  user: GetUserResponseSchema.nullable(),
})

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
