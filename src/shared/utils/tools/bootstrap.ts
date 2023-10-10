import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

export const bootstrap = (module: any) =>
  async function () {
    const instance = express();
    const app = await NestFactory.create(module, new ExpressAdapter(instance));
    app.useLogger(false);
    // if (process.env.ENV !== 'local') {
    //   app.useLogger(false);
    // }
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    await app.init();
    return instance;
  };
