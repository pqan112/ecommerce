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
