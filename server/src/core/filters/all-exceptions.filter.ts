import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PinoLogger } from 'nestjs-pino'
import { ZodSerializationException } from 'nestjs-zod'
import { ZodError as ZodErrorV4 } from 'zod'
import { Response, Request } from 'express'
import { Env } from '@config/env.config.js'
import { CORRELATION_ID_HEADER } from '@shared/constants/headers.constant.js'
import {
  buildApiErrorPayload,
  extractFromHttpExceptionBody,
  payloadFromUnknownException,
} from '@shared/utils/api-error-response.js'

@Catch()
@Injectable()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly isProd: boolean

  constructor(
    private readonly logger: PinoLogger,
    config: ConfigService,
  ) {
    this.logger.setContext(AllExceptionFilter.name)
    this.isProd =
      config.getOrThrow<Env['NODE_ENV']>('NODE_ENV') === 'production'
  }

  catch(exception: unknown, host: ArgumentsHost) {
    if (host.getType() !== 'http') return
    const httpCtx = host.switchToHttp()
    const req = httpCtx.getRequest<Request>()
    const res = httpCtx.getResponse<Response>()
    const ctx = {
      requestId: (req.headers[CORRELATION_ID_HEADER] as string) ?? '',
      path: req.url,
    }
    // http exception
    if (exception instanceof HttpException) {
      if (exception instanceof ZodSerializationException) {
        const zodError = exception.getZodError()
        if (zodError instanceof ZodErrorV4) {
          this.logger.error(`ZodSerializationException: ${zodError.message}`)
        }
      }

      const statusCode = exception.getStatus()
      const rawErrorResponse = exception.getResponse()
      // rawErrorResponse is a string
      if (typeof rawErrorResponse === 'string') {
        res
          .status(statusCode)
          .json(
            buildApiErrorPayload(statusCode, rawErrorResponse, undefined, ctx),
          )
        return
      }

      // rawErrorResponse is an object
      const { message, error } = extractFromHttpExceptionBody(
        rawErrorResponse,
        exception.message,
      )
      res
        .status(statusCode)
        .json(buildApiErrorPayload(statusCode, message, error, ctx))
      return
    }

    // unknown exception
    this.logger.error({
      requestId: ctx.requestId,
      path: ctx.path,
      error:
        exception instanceof Error ? exception.message : 'Unknown exception',
      stack: exception instanceof Error ? exception.stack : undefined,
    })

    const payload = payloadFromUnknownException(exception, ctx, this.isProd)
    res.status(payload.statusCode).json(payload)
    return
  }
}
