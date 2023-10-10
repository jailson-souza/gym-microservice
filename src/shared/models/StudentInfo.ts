import { Student } from './Student';
import { User } from './User';
import { Workout } from './Workout';

export type StudentInfo = Student & {
  user: User;
  workouts: Workout[];
};
