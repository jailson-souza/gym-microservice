import { Exercise } from './Exercise';

export type TrainingPlan = {
  id?: string;
  name: string;
  studentId: string;
  order: number;
  isActive?: boolean;
  exercises?: Exercise[];
};
