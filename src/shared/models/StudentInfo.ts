import { Student } from './Student';
import { User } from './User';
import { TrainingPlan } from './TrainingPlan';

export type StudentInfo = Student & {
  user: User;
  trainingPlan: TrainingPlan[];
};
