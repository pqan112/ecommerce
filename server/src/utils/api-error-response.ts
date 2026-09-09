import { HttpStatus } from '@nestjs/common'
import envConfig from '../configs/env.config.js'

export type ApiErrorPayload = {
  success: false
  statusCode: number
  message: string
  error?: string
  requestId: string
  timestamp: string
  path: string
}

export type ApiErrorContext = {
  requestId: string
  path: string
}

export function buildApiErrorPayload(
  statusCode: number,
  message: string | string[],
  error: string | undefined,
  ctx: ApiErrorContext,
): ApiErrorPayload {
  return {
    statusCode: statusCode,
    success: false,
    message: formatClientErrorMessage(message),
    requestId: ctx.requestId,
    timestamp: new Date().toISOString(),
    path: ctx.path,
    error: error ?? '',
  }
}

const formatClientErrorMessage = (message: string | string[]) => {
  if (Array.isArray(message)) {
    return message
      .map((mess) => String(mess).trim())
      .filter(Boolean)
      .join(' ')
  }

  return String(message)
}

type NestHttpErrorBody = {
  message?: string | string[]
  error?: string
  statusCode?: number
}

export function extractFromHttpExceptionBody(
  body: Record<string, unknown> | NestHttpErrorBody,
  fallbackMessage: string,
) {
  const b = body as NestHttpErrorBody
  const message = b.message !== undefined ? b.message : fallbackMessage
  const error =
    typeof b.error === 'string' && b.error !== '' ? b.error : undefined

  return { message, error }
}

// unknown exception
export function payloadFromUnknownException(
  exception: unknown,
  ctx: ApiErrorContext,
): ApiErrorPayload {
  const prod = envConfig.NODE_ENV === 'production'
  if (exception instanceof Error) {
    const message = prod
      ? 'errors.common.internalServerError'
      : exception.message
    return buildApiErrorPayload(
      HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      'errors.common.internalServerError',
      ctx,
    )
  }
  return buildApiErrorPayload(
    HttpStatus.INTERNAL_SERVER_ERROR,
    'errors.common.internalServerError',
    'errors.common.internalServerError',
    ctx,
  )
}
