import { Exercise } from './Exercise';

export type TrainingPlanHistory = {
  id?: string;
  studentId: string;
  exerciseId: string;
  startDate?: Date;
  endDate?: Date;
  exercise?: Exercise;
};
