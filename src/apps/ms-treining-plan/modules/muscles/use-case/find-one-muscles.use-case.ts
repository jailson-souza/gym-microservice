import { Injectable } from '@nestjs/common';
import { Muscle } from 'src/shared/models/Muscle';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneMusclesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<Muscle> {
    return this.prisma.muscle.findUnique({
      where: { id },
      include: {
        exercises: true,
      },
    }) as Promise<Muscle>;
  }
}
