import { Injectable } from '@nestjs/common';
import { Paginator } from 'src/shared/utils/paginator';
import { PrismaService } from 'src/shared/utils/prisma';

type TParams = {
  page: number;
  limit: number;
};

@Injectable()
export class FindAllTrainingPlansUseCase {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginator: Paginator,
  ) {}

  execute({ page = 1, limit = 100 }: TParams) {
    return this.paginator.execute(this.prisma.trainingPlan, {
      paginator: {
        page,
        limit,
      },
    });
  }
}
