import { BadRequestException, NotFoundException } from '@nestjs/common'

export const messages = {
  'errors.common.userNotFound': 'Không tìm thấy người dùng',
  'errors.auth.verificationFailed': 'Token xác minh không hợp lệ',
  'errors.auth.tokenExpired': 'Token xác minh đã hết hạn',
  'errors.auth.emailMismatch': 'Email không khớp với token xác minh',
} as const

export type ApiMessageKey = keyof typeof messages

export function translateApiMessage(key: ApiMessageKey): string {
  return messages[key] ?? key
}

export function apiBadRequest(key: ApiMessageKey): never {
  throw new BadRequestException(translateApiMessage(key))
}

export function apiNotFound(key: ApiMessageKey): never {
  throw new NotFoundException(translateApiMessage(key))
}
