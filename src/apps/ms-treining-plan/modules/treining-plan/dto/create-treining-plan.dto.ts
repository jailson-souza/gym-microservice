import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTrainingPlanDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  studentId: string;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsArray()
  exercises: string[];
}
