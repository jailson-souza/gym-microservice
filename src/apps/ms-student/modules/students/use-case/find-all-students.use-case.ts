import { Injectable } from '@nestjs/common';
import { skipTake } from 'src/shared/utils/libs/page-limit-param.lib';
import { PrismaService } from 'src/shared/utils/prisma';

type TParamsFindAll = {
  limit?: number;
  page?: number;
};

@Injectable()
export class FindAllStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ limit = 100, page = 1 }: TParamsFindAll) {
    const count = await this._count({ limit, page });
    const data = await this.prisma.student.findMany(skipTake(page, limit));
    return {
      ...count,
      data,
    };
  }

  private async _count({ limit = 100, page = 1 }: TParamsFindAll) {
    const _skipTake = skipTake(page, limit);
    const count = await this.prisma.student.count();
    return {
      pages: Math.ceil(count / _skipTake.take),
      count,
    };
  }
}
