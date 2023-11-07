import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { CreateTrainingPlanDto } from '../dto/create-treining-plan.dto';

export type TInputCreateTraining = CreateTrainingPlanDto & {
  createdByUserId: string;
};

@Injectable()
export class CreateTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: TInputCreateTraining) {
    await this._verifyExistTrainingPlanActive();
    const { trainings, ...trainingPlan } = input;
    const trainingPlanCreated = await this.prisma.trainingPlan.create({
      data: trainingPlan,
    });

    for await (const traning of trainings) {
      const trainingCreated = await this.prisma.training.create({
        data: {
          name: traning.name,
          order: traning.order,
          trainingPlanId: trainingPlanCreated.id,
        },
      });
      const exercisesMapped = traning.exercises.map((ex) => ({
        ...ex,
        treiningId: trainingCreated.id,
      }));
      await this.prisma.trainingExercise.createMany({ data: exercisesMapped });
    }
  }

  private async _verifyExistTrainingPlanActive() {
    const trainingPlan = await this.prisma.trainingPlan.findFirst({
      where: { isActive: true },
    });

    if (trainingPlan) {
      throw new ConflictException(
        'there is already an active training plan for this student',
      );
    }
  }
}
