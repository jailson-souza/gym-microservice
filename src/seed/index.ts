import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { SeedService } from './seed.service';
async function seedRun() {
  const seed = await NestFactory.createApplicationContext(SeedModule);
  const seedeedService = seed.get(SeedService);
  await seedeedService.run();
  await seed.close();
}
seedRun();
