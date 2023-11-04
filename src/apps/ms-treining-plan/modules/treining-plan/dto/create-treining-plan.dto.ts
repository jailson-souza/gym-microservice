import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class TrainingPlanExerciseDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  intervalInSeconds: number;

  @IsNotEmpty()
  @IsNumber()
  order: number;
}

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
  exercises: TrainingPlanExerciseDto[];
}
