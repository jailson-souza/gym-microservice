import { Injectable } from '@nestjs/common';
import { TrainingPlanHistory } from 'src/shared/models/TrainingPlanHistory';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneTrainingPlanHistoryUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<TrainingPlanHistory> {
    id;
    return;
    // return (this.prisma.training -
    //   planHistory.findUnique({
    //     where: { id },
    //   })) as Promise<TrainingPlanHistory>;
  }
}
