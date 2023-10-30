import { NestFactory } from '@nestjs/core';
import AppsModule from './apps/apps.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppsModule);
  app.useLogger(false);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
}

bootstrap();
