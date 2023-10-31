import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { Muscle } from 'src/shared/models/Muscle';
import { CreateMuscleDto } from '../dto/create-muscle.dto';

@Injectable()
export class CreateMusclesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: CreateMuscleDto): Promise<Muscle> {
    await this.verifyExistingMuscle(input.name);
    const muscle = await this.prisma.muscle.create({ data: input });
    return muscle as Muscle;
  }

  private async verifyExistingMuscle(name: string) {
    const muscle = await this.prisma.muscle.findFirst({
      where: { name, isActive: true },
      select: { id: true, name: true },
    });
    if (muscle) {
      throw new ConflictException('muscle is already exist');
    }
  }
}
