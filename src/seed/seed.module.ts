import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/shared/utils/prisma';
import { MuscleSeedService } from './muscle/muscle-seed.service';
import { SeedService } from './seed.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [PrismaService, ConfigService, SeedService, MuscleSeedService],
})
export class SeedModule {}
