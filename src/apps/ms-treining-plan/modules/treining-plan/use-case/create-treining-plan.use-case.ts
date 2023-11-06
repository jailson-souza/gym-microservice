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
    input;
    // const { exercises, ...trainingPlan } = input;
    // await this.verifyExistingTrainingPlan(input.name);
    // const trainingPlanCreated = await this.prisma.trainingPlan.create({
    //   data: trainingPlan,
    // });
    // const trainingPlanExercises = exercises.map(
    //   ({ id, intervalInSeconds, order }) => ({
    //     order,
    //     intervalInSeconds,
    //     exerciseId: id,
    //     treiningPlanId: trainingPlanCreated.id,
    //   }),
    // );
    // await this.prisma.trainingExercise.createMany({
    //   data: trainingPlanExercises,
    // });
    // return trainingPlanCreated as TrainingPlan;
  }

  private async verifyExistingTrainingPlan(name: string) {
    const trainingPlan = await this.prisma.trainingPlan.findFirst({
      where: { name, isActive: true },
      select: { id: true, name: true },
    });
    if (trainingPlan) {
      throw new ConflictException('training-plan is already exist');
    }
  }
}
