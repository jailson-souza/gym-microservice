import { Injectable } from '@nestjs/common';
import { WorkoutHistory } from 'src/shared/models/WorkoutHistory';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByStudentWorkoutHistoryUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(studentId: string): Promise<WorkoutHistory[]> {
    return this.prisma.workoutHistory.findMany({
      where: { studentId },
    }) as Promise<WorkoutHistory[]>;
  }
}
