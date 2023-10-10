import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateMuscleDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;
}
