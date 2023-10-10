import { Role } from './Role';

export type User = {
  id?: string;
  name: string;
  email: string;
  password?: string;
  isActive: boolean;
  studentId?: string;
  role?: Partial<Role>;
};
