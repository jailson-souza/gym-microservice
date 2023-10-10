import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutHistoryDto {
  @IsNotEmpty()
  studentId: string;

  @IsNotEmpty()
  exerciseId: string;

  @IsNotEmpty()
  startDate: Date;
}
