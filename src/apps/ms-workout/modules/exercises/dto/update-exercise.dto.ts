import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateExerciseDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  muscleId?: string;
}
