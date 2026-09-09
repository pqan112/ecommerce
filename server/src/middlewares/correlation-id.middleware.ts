import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import { CORRELATION_ID_HEADER } from '../shared/constants/headers.constant.js'
import { randomUUID } from 'crypto'

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const existing = req.headers[CORRELATION_ID_HEADER]
    // if exsiting, use it, otherwise generate a new one
    const requestId = existing ?? randomUUID()
    // attach to request header for later use in backend services
    req.headers[CORRELATION_ID_HEADER] = requestId
    // send CORRELATION_ID_HEADER to client
    res.setHeader(CORRELATION_ID_HEADER, requestId)
    next()
  }
}
