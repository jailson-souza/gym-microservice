import { Injectable } from '@nestjs/common';
import { WorkoutHistory } from 'src/shared/models/WorkoutHistory';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllWorkoutHistoryUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<WorkoutHistory[]> {
    return this.prisma.workoutHistory.findMany() as Promise<WorkoutHistory[]>;
  }
}
