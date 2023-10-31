import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

interface InputFinish {
  studentId: string;
  trainingPlanId: string;
  exerciseId: string;
}

@Injectable()
export class FinishExerciseTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: InputFinish): Promise<void> {
    input;
    return;
    // const { studentId, training-planId, exerciseId } = input;
    // const training-plan = await this.prisma.training-plan.findFirst({
    //   where: { id: training-planId, studentId },
    //   select: { id: true, studentId: true },
    // });

    // if (!training-plan) {
    //   throw new NotFoundException(
    //     'this training-plan is not exist or does not belong to this student',
    //   );
    // }

    // const lastExerciseWithoutEndDate =
    //   await this.prisma.training-planHistory.findFirst({
    //     where: {
    //       exerciseId,
    //       studentId,
    //       endDate: null,
    //     },
    //     orderBy: {
    //       startDate: 'desc',
    //     },
    //   });

    // if (!lastExerciseWithoutEndDate) {
    //   throw new NotFoundException('this exercise not was started');
    // }

    // await this.prisma.training-planHistory.update({
    //   where: { id: lastExerciseWithoutEndDate.id },
    //   data: { endDate: new Date() },
    // });
  }
}
