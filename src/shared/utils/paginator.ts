import { Injectable } from '@nestjs/common';
import {} from '@prisma/client';
import { skipTake } from './libs/page-limit-param.lib';

type TPaginator = {
  page: number;
  limit: number;
};

type TWhere = {
  [key: string]: any;
};

type TSelect = {
  [key: string]: any;
};

type TParams = {
  paginator: TPaginator;
  where?: TWhere;
  select?: TSelect;
};

@Injectable()
export class Paginator {
  async execute(prismaModel: any, params: TParams) {
    const { paginator, select, where } = params;
    const _skipTake = skipTake(paginator.page, paginator.limit);
    const count = await prismaModel.count({ where });
    const data = await prismaModel.findMany({ ..._skipTake, select, where });
    const pages = Math.ceil(count / _skipTake.take);
    return {
      pages,
      count,
      data,
    };
  }
}
