import { createZodDto } from 'nestjs-zod'
import {
  GetCurrentUserResponseSchema,
  GetUserResponseSchema,
} from './user.model.js'

export class GetUserResponseDto extends createZodDto(GetUserResponseSchema) {}

export class GetCurrentUserResponseDto extends createZodDto(
  GetCurrentUserResponseSchema,
) {}
