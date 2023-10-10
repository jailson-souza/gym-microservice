import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWorkoutDto {
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
