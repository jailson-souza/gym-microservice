import { IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class TrainingExerciseDto {
  @IsNotEmpty()
  exerciseId: string;

  @IsNotEmpty()
  intervalInSeconds: number;

  @IsNotEmpty()
  @IsNumber()
  order: number;
}

export class Training {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsArray()
  exercises: TrainingExerciseDto[];
}

export class CreateTrainingPlanDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  studentId: string;

  @IsOptional()
  objective?: string;

  @IsNotEmpty()
  @IsArray()
  trainings: Training[];
}
