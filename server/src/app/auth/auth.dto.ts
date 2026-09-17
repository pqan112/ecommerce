import { createZodDto } from 'nestjs-zod'
import {
  CheckAuthResponseSchema,
  GetSessionResponseSchema,
  VerifyEmailResponseSchema,
} from './auth.model.js'

export class GetSessionResponseDto extends createZodDto(
  GetSessionResponseSchema,
) {}

export class VerifyEmailResponseDto extends createZodDto(
  VerifyEmailResponseSchema,
) {}

export class CheckAuthResponseDto extends createZodDto(
  CheckAuthResponseSchema,
) {}
