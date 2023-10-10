import { LoggingWinston } from '@google-cloud/logging-winston';
import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';
import { genShortUUID } from './libs/uuid.lib';

@Injectable({ scope: Scope.REQUEST })
export class Logger implements LoggerService {
  private labels: string[] = ['gym-microservice'];
  private requestId: string = genShortUUID();
  private logger: winston.Logger;
  constructor(private readonly config: ConfigService) {
    if (this.config.get('ENV') === 'local') {
      this.configLocalLogger();
    } else {
      this.configCloudLogger();
    }
  }

  log(message: any, metadata?: Object) {
    this.logger.info(message, { requestId: this.requestId, metadata });
  }

  warn(message: any, metadata?: Object) {
    this.logger.warn(message, { requestId: this.requestId, metadata });
  }

  error(message: any, stack: string, metadata?: object) {
    this.logger.error(message, {
      requestId: this.requestId,
      stack,
      metadata,
    });
  }

  setLabel(value: string) {
    this.labels.push(value);
  }

  private getLabel(): string {
    return this.labels.map((value) => value).join(' ');
  }

  private configCloudLogger() {
    this.logger = winston.createLogger({
      transports: [new LoggingWinston()],
    });
  }

  private configLocalLogger() {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.label({
          label: this.getLabel(),
        }),
        winston.format.printf(
          (info) =>
            `\n${info.level} ${info.label} ${info.message}\n${JSON.stringify(
              info.metadata,
            )}`,
        ),
      ),
    });
  }
}
