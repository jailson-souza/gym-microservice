import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class ActivateMusclesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<void> {
    await this.prisma.muscle.update({
      where: { id },
      data: { isActive: true },
    });
  }
}
