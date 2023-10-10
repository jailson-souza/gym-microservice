import { Injectable } from '@nestjs/common';
import { Workout } from 'src/shared/models/Workout';

import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneWorkoutsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<Workout> {
    return this.prisma.workout.findUnique({
      where: { id },
      select: {
        id: true,
        studentId: true,
        name: true,
        order: true,
        isActive: true,
        workoutExercises: {
          select: {
            id: true,
            exercise: {
              select: {
                id: true,
                name: true,
                muscleId: true,
                isActive: true,
                muscle: true,
              },
            },
          },
        },
      },
    }) as Promise<Workout>;
  }
}
