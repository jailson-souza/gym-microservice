import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateTrainingPlanDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  order: number;
}
