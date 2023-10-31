import { Injectable } from '@nestjs/common';
import { TrainingPlanHistory } from 'src/shared/models/TrainingPlanHistory';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllTrainingPlanHistoryUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<TrainingPlanHistory[]> {
    return;
    // return (this.prisma.training - planHistory.findMany()) as Promise<
    //   TrainingPlanHistory[]
    // >;
  }
}
