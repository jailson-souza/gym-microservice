import { Exercise } from './Exercise';

export type Workout = {
  id?: string;
  name: string;
  studentId: string;
  order: number;
  isActive?: boolean;
  exercises?: Exercise[];
};
