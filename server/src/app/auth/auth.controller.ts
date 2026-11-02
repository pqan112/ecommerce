import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  Req,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service.js'
import { ZodResponse } from 'nestjs-zod'
import { GetCurrentUserResponseDto } from '@app/user/user.dto.js'
import type { Request } from 'express'
import {
  CheckAuthResponseDto,
  GetSessionResponseDto,
  VerifyEmailResponseDto,
} from './auth.dto.js'

@ApiTags('Xác thực (Auth)')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  @ApiOperation({
    summary: 'Lấy thông tin user hiện tại',
    operationId: 'auth_get-me',
  })
  @ZodResponse({
    type: GetCurrentUserResponseDto,
    description: 'Response type',
  })
  @ApiBearerAuth()
  async getCurrentUser(@Req() req: Request) {
    return this.authService.getCurrentUser(req)
  }

  @Get('session')
  @ApiOperation({
    summary: 'Lấy session (token, hết hạn, user)',
    operationId: 'auth_get-session',
  })
  @ZodResponse({
    type: GetSessionResponseDto,
    description: 'Response type',
  })
  @ApiBearerAuth()
  async getSession(@Req() req: Request) {
    return this.authService.getSession(req)
  }

  @Get('check')
  @ApiOperation({
    summary: 'Kiểm tra đã đăng nhập hay chưa',
    operationId: 'auth_check',
  })
  @ZodResponse({
    type: CheckAuthResponseDto,
    description: 'Response type',
  })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async checkAuth(@Req() req: Request) {
    return this.authService.checkAuth(req)
  }
}
