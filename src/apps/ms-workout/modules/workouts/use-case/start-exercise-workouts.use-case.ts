import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

interface InputStart {
  studentId: string;
  workoutId: string;
  exerciseId: string;
}

@Injectable()
export class StartExerciseWorkoutsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: InputStart): Promise<void> {
    const { workoutId, exerciseId, studentId } = input;

    const workout = await this.prisma.workout.findFirst({
      where: {
        id: workoutId,
        studentId,
        workoutExercises: {
          some: {
            exerciseId,
          },
        },
      },
      select: { id: true, studentId: true },
    });

    if (!workout) {
      throw new NotFoundException(
        'this workout is not exist or exercise is not included',
      );
    }

    const existExerciseNotFinished = await this.prisma.workoutHistory.findFirst(
      {
        where: {
          studentId,
          endDate: null,
        },
      },
    );

    if (existExerciseNotFinished) {
      throw new NotFoundException(
        'there are exercises that have not been finished',
      );
    }

    await this.prisma.workoutHistory.create({
      data: { exerciseId, studentId: workout.studentId, startDate: new Date() },
    });
  }
}
