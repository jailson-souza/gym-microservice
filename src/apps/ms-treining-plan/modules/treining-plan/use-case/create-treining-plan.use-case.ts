import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { TrainingPlan } from 'src/shared/models/TrainingPlan';
import { CreateTrainingPlanDto } from '../dto/create-treining-plan.dto';

@Injectable()
export class CreateTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: CreateTrainingPlanDto): Promise<TrainingPlan> {
    input;
    return;
    //   const { exercises, ...training-plan } = input;

    //   await this.verifyExistingTrainingPlan(input.name);
    //   const training-planCreated = await this.prisma.training-plan.create({ data: training-plan });

    //   const training-planExercises = exercises.map((exerciseId, index) => ({
    //     training-planId: training-planCreated.id,
    //     exerciseId,
    //     order: index + 1,
    //   }));

    //   for await (const item of training-planExercises) {
    //     await this.prisma.training-planExercise.create({ data: item });
    //   }

    //   return training-planCreated as TrainingPlan;
    // }

    // private async verifyExistingTrainingPlan(name: string) {
    //   const training-plan = await this.prisma.training-plan.findFirst({
    //     where: { name, isActive: true },
    //     select: { id: true, name: true },
    //   });
    //   if (training-plan) {
    //     throw new ConflictException('training-plan is already exist');
    //   }
  }
}
