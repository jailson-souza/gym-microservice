import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTrainingPlanDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  objective?: string;
}
