import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';
import { IsDateFormat } from 'src/shared/decorators/IsDateFormat.decorator';

export class CreateStudentDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsDateFormat('yyyy-mm-dd')
  @IsDateString()
  dateOfBirth: Date;

  @IsOptional()
  @IsNotEmpty()
  gender?: string;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;
}
