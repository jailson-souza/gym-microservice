import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneExercisesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string) {
    return this.prisma.exercise.findUnique({
      where: { id },
      include: {
        muscle: true,
      },
    });
  }
}
