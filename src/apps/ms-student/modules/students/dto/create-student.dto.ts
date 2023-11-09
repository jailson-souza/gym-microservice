import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { IsDateFormat } from 'src/shared/decorators/IsDateFormat.decorator';
import { GenderEnum } from 'src/shared/models/enums/Gender.enum';

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
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsOptional()
  @IsNumber()
  heightInMt?: number;

  @IsOptional()
  @IsNumber()
  weightInKg?: number;
}
