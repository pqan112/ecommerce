import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common'
import { EmailService } from './email.service.js'
import { ApiExcludeController } from '@nestjs/swagger'
import { internalSecretGuard } from '@core/guards/internal-secret.guard.js'
import { SendAuthEmailDto } from './email.dto.js'

@ApiExcludeController()
@Controller('internal/email')
@UseGuards(internalSecretGuard)
export class InternalEmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('verification')
  @HttpCode(HttpStatus.OK)
  async sendVerification(@Body() body: SendAuthEmailDto) {
    const result = await this.emailService.sendVerificationEmail(
      body.to,
      body.name,
      body.url,
    )

    return {
      success: result,
    }
  }

  @Post('password-reset')
  @HttpCode(HttpStatus.OK)
  async sendPasswordReset(@Body() body: SendAuthEmailDto) {
    const result = await this.emailService.sendPasswordResetEmail(
      body.to,
      body.name,
      body.url,
    )

    return {
      success: result,
    }
  }
}
