import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateWorkoutDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  order: number;
}
