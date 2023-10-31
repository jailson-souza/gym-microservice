import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';
import { UpdateMuscleDto } from '../dto/update-muscle.dto';

@Injectable()
export class UpdateMusclesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateMuscleDto): Promise<void> {
    const data = removePropertyNotAllowed(input, ['name']);
    await this.prisma.muscle.update({ where: { id }, data });
  }
}
