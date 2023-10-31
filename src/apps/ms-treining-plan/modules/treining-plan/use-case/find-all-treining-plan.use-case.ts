import { Injectable } from '@nestjs/common';
import { TrainingPlan } from 'src/shared/models/TrainingPlan';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<TrainingPlan[]> {
    return;
    // return (this.prisma.training - plan.findMany()) as Promise<TrainingPlan[]>;
  }
}
