import { Injectable } from '@nestjs/common';
import { Workout } from 'src/shared/models/Workout';

import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByStudentWorkoutUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(studentId: string): Promise<Workout[]> {
    return this.prisma.workout.findMany({
      where: { studentId },
      select: {
        id: true,
        studentId: true,
        name: true,
        order: true,
        isActive: true,
        workoutExercises: {
          select: {
            id: true,
            order: true,
            exercise: {
              select: {
                id: true,
                name: true,
                isActive: true,
                muscleId: true,
                muscle: true,
              },
            },
          },
        },
      },
    }) as Promise<Workout[]>;
  }
}
