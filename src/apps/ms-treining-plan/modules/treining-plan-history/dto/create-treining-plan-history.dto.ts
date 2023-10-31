import { IsNotEmpty } from 'class-validator';

export class CreateTrainingPlanHistoryDto {
  @IsNotEmpty()
  studentId: string;

  @IsNotEmpty()
  exerciseId: string;

  @IsNotEmpty()
  startDate: Date;
}
