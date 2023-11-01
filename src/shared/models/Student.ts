import { GenderEnum } from './enums/Gender.enum';

export type Student = {
  id?: string;
  userId?: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  gender: GenderEnum;
  heightInMt?: number;
  weightInKg?: number;
  isActive: boolean;
  createdAt: Date;
};
