import { Injectable } from '@nestjs/common';
import { Workout } from 'src/shared/models/Workout';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllWorkoutsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<Workout[]> {
    return this.prisma.workout.findMany() as Promise<Workout[]>;
  }
}
