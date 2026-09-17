import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  Req,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service.js'
import { ZodResponse } from 'nestjs-zod'
import { GetCurrentUserResponseDto } from '@app/user/user.dto.js'
import type { Request } from 'express'

@ApiTags('Xác thực (Auth)')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('verify-email')
  @ApiOperation({
    summary: 'Xác minh email qua token (query)',
  })
  async verifyEmail(
    @Query('token') token: string,
    @Query('email') email: string,
  ) {
    return this.authService.verifyEmailCustom(token, email)
  }

  @Get('me')
  @ApiOperation({
    summary: 'Lấy thông tin user hiện tại',
  })
  @ZodResponse({ type: GetCurrentUserResponseDto, status: 200 })
  async getCurrentUser(@Req() req: Request) {
    return this.authService.getCurrentUser(req)
  }

  @Get('session')
  @ApiOperation({
    summary: 'Lấy session (token, hết hạn, user)',
    operationId: 'auth_get_session',
  })
  async getSession(@Req() req: Request) {
    return this.authService.getSession(req)
  }

  @Get('check')
  @ApiOperation({
    summary: 'Kiểm tra đã đăng nhập hay chưa',
  })
  @HttpCode(HttpStatus.OK)
  async checkAuth(@Req() req: Request) {
    return this.authService.checkAuth(req)
  }
}
