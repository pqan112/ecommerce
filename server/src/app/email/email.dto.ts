import { createZodDto } from 'nestjs-zod'
import { SendAuthEmailSchema } from './email.model.js'

export class SendAuthEmailDto extends createZodDto(SendAuthEmailSchema) {}
