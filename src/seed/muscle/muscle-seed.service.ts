import { PrismaService } from '../../shared/utils/prisma';
import * as data from '../data.json';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MuscleSeedService {
  constructor(private readonly prisma: PrismaService) {}

  async run() {
    const muscles = await this.prisma.muscle.findMany({
      where: { id: { in: data.map(({ id }) => id) } },
      select: { id: true, name: true },
    });

    const newMuscles = data
      .filter(({ id }) => !muscles.some((m) => m.id === id))
      ?.map(({ id, name }) => ({ id, name }));

    if (newMuscles?.length > 0) {
      await this.prisma.muscle.createMany({ data: newMuscles });
    }
  }
}
