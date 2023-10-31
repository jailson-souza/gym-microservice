import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

interface InputStart {
  studentId: string;
  trainingPlanId: string;
  exerciseId: string;
}

@Injectable()
export class StartExerciseTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: InputStart): Promise<void> {
    input;
    return;
    // const { training-planId, exerciseId, studentId } = input;

    // const training-plan = await this.prisma.training-plan.findFirst({
    //   where: {
    //     id: training-planId,
    //     studentId,
    //     training-planExercises: {
    //       some: {
    //         exerciseId,
    //       },
    //     },
    //   },
    //   select: { id: true, studentId: true },
    // });

    // if (!training-plan) {
    //   throw new NotFoundException(
    //     'this training-plan is not exist or exercise is not included',
    //   );
    // }

    // const existExerciseNotFinished = await this.prisma.training-planHistory.findFirst(
    //   {
    //     where: {
    //       studentId,
    //       endDate: null,
    //     },
    //   },
    // );

    // if (existExerciseNotFinished) {
    //   throw new NotFoundException(
    //     'there are exercises that have not been finished',
    //   );
    // }

    // await this.prisma.training-planHistory.create({
    //   data: { exerciseId, studentId: training-plan.studentId, startDate: new Date() },
    // });
  }
}
