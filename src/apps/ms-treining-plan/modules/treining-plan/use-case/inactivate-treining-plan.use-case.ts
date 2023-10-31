import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class InactivateTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<void> {
    id;
    return;
    // (await this.prisma.training) -
    //   plan.update({
    //     where: { id },
    //     data: { isActive: false },
    //   });
  }
}
