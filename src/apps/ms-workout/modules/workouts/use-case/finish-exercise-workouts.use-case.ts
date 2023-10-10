import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

interface InputFinish {
  studentId: string;
  workoutId: string;
  exerciseId: string;
}

@Injectable()
export class FinishExerciseWorkoutsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: InputFinish): Promise<void> {
    const { studentId, workoutId, exerciseId } = input;
    const workout = await this.prisma.workout.findFirst({
      where: { id: workoutId, studentId },
      select: { id: true, studentId: true },
    });

    if (!workout) {
      throw new NotFoundException(
        'this workout is not exist or does not belong to this student',
      );
    }

    const lastExerciseWithoutEndDate =
      await this.prisma.workoutHistory.findFirst({
        where: {
          exerciseId,
          studentId,
          endDate: null,
        },
        orderBy: {
          startDate: 'desc',
        },
      });

    if (!lastExerciseWithoutEndDate) {
      throw new NotFoundException('this exercise not was started');
    }

    await this.prisma.workoutHistory.update({
      where: { id: lastExerciseWithoutEndDate.id },
      data: { endDate: new Date() },
    });
  }
}
