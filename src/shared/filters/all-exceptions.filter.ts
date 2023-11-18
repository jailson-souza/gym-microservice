import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  HttpServer,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(private readonly httpserver: HttpServer) {
    super(httpserver);
  }

  catch(exception: any, host: ArgumentsHost): void {
    console.log(exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const messages = exception.response.message;
    const responseBody = {
      messages: Array.isArray(messages) ? messages : [messages],
    };

    response.status(httpStatus).json(responseBody);
  }
}
