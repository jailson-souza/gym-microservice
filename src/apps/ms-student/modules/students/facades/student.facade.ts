import { Injectable } from '@nestjs/common';
import { FindByUserIdStudentsUseCase } from '../use-case/find-by-user-id-students.use-case';
import { UserExternalService } from 'src/apps/ms-student/external-services/users/user.external-service';
import { WorkoutExternalService } from 'src/apps/ms-student/external-services/workout/workout.external-service';
import { StudentInfo } from 'src/shared/models/StudentInfo';

@Injectable()
export class StudentFacade {
  constructor(
    private readonly workoutExt: WorkoutExternalService,
    private readonly userExt: UserExternalService,
    private readonly findByUserIdStudentsUseCase: FindByUserIdStudentsUseCase,
  ) {}

  async getThisStudent(userId: string): Promise<StudentInfo> {
    const workouts = await this.workoutExt.getWorkoutOfThisUser();
    const user = await this.userExt.getThisUser();
    const students = await this.findByUserIdStudentsUseCase.execute(userId);
    return {
      ...students,
      user,
      workouts,
    };
  }
}
