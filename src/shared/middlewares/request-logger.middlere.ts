import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from '../utils/logger';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}
  use(req: Request, res: Response, next: NextFunction) {
    const meta = this.parseMeta(req);
    this.logger.log(`start request`, meta);
    this.onResponseFinish(res);
    next();
  }

  private onResponseFinish(res: Response) {
    res.on('finish', () => {
      const { statusCode, statusMessage } = res;
      this.logger.log('finish request', { statusCode, statusMessage });
    });
  }

  private parseMeta(req: Request) {
    const { method, protocol, hostname, baseUrl, headers, body, query } = req;
    return {
      url: `${method.toUpperCase()} ${protocol}://${hostname}${baseUrl}`,
      headers: this.removeProperties(headers, ['authorization']),
      body: this.removeProperties(body, ['password']),
      query,
    };
  }

  private removeProperties(object: Object, properties: string[]) {
    return properties.reduce(
      (acc, curr) => ({ ...acc, [curr]: '[filtered]' }),
      object,
    );
  }
}
