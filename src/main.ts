import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppsModule } from './apps/apps.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './shared/filters/all-exceptions.filter';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppsModule);
  app.useLogger(false);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(PORT, () =>
    console.log(`server is running in port ${PORT}`),
  );
}

bootstrap();
