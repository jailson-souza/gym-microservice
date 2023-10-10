import { Injectable } from '@nestjs/common';
import { WorkoutHistory } from 'src/shared/models/WorkoutHistory';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneWorkoutHistoryUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<WorkoutHistory> {
    return this.prisma.workoutHistory.findUnique({
      where: { id },
    }) as Promise<WorkoutHistory>;
  }
}
