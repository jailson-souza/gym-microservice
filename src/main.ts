import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppsModule } from './apps/apps.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './shared/filters/all-exceptions.filter';

const config = new DocumentBuilder()
  .setTitle('GymPower API')
  .setDescription('The GymPower API documentation')
  .setVersion('1.0')
  .build();

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppsModule);
  app.useLogger(false);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  await app.listen(PORT, () =>
    console.log(`server is running in port ${PORT}`),
  );
}

bootstrap();
