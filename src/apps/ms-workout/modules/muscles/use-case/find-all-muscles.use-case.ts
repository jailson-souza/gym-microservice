import { Injectable } from '@nestjs/common';
import { Muscle } from 'src/shared/models/Muscle';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllMusclesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<Muscle[]> {
    return this.prisma.muscle.findMany() as Promise<Muscle[]>;
  }
}
