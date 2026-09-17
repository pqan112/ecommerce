import { GetUserResponseSchema } from '@shared/models/user.model.js'
import z from 'zod'

export const GetCurrentUserResponseSchema = z.object({
  success: z.boolean(),
  authenticated: z.boolean(),
  message: z.string().optional(),
  user: GetUserResponseSchema.nullable(),
})
