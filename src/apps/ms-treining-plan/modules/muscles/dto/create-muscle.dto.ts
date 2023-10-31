import { IsNotEmpty } from 'class-validator';

export class CreateMuscleDto {
  @IsNotEmpty()
  name: string;
}
