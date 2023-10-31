import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class ActivateTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<void> {
    id;
    // await this.prisma..update({
    //     where: { id },
    //     data: { isActive: true },
    //   });
  }
}
