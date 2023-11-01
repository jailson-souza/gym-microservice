import { NestFactory } from '@nestjs/core';
import { AppsModule } from './apps/apps.module';
import { SeedModule } from './seed/seed.module';
import { ValidationPipe } from '@nestjs/common';
import { SeedService } from './seed/seed.service';

async function seedRun() {
  const seed = await NestFactory.createApplicationContext(SeedModule);
  const seedeedService = seed.get(SeedService);
  await seedeedService.run();
  await seed.close();
}

async function bootstrap() {
  await seedRun();
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppsModule);
  app.useLogger(false);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
}

bootstrap();
