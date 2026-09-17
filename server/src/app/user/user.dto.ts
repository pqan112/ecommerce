import { createZodDto } from 'nestjs-zod'
import { GetCurrentUserResponseSchema } from './user.model.js'

export class GetCurrentUserResponseDto extends createZodDto(
  GetCurrentUserResponseSchema,
) {}
