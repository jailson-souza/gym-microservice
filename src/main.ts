import { NestFactory } from '@nestjs/core';
import AppsModule from './apps/apps.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppsModule);
  app.useLogger(false);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.listen(process.env.PORT);
}

bootstrap();
