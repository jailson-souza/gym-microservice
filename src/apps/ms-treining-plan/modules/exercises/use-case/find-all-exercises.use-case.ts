import { Injectable } from '@nestjs/common';
import { Paginator } from 'src/shared/utils/paginator';
import { PrismaService } from 'src/shared/utils/prisma';

type TParamsFindAll = {
  limit?: number;
  page?: number;
};

@Injectable()
export class FindAllExercisesUseCase {
  constructor(
    private readonly prisma: PrismaService,
    private readonly paginator: Paginator,
  ) {}

  execute({ page = 1, limit = 100 }: TParamsFindAll) {
    return this.paginator.execute(this.prisma.exercise, {
      paginator: { page, limit },
      select: {
        id: true,
        name: true,
        isActive: true,
        muscleId: true,
        muscle: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
