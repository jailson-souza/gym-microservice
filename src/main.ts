import { NestFactory } from '@nestjs/core';
import AppsModule from './apps/apps.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppsModule);
  app.useLogger(false);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.listen(AppsModule.PORT);
  await app.init();
}

bootstrap();
