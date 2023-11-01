import { RoleEnum } from './enums/Role.enum';

export type UserRole = {
  id: string;
  role: RoleEnum;
  userId: string;
  createdAt: Date;
};
