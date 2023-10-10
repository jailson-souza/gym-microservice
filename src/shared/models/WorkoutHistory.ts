import { Exercise } from './Exercise';

export type WorkoutHistory = {
  id?: string;
  studentId: string;
  exerciseId: string;
  startDate?: Date;
  endDate?: Date;
  exercise?: Exercise;
};
