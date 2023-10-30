import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/utils/tools/global.module';
import MsUserModule from './ms-user/ms-user.module';
import MsWorkoutModule from './ms-workout/ms-workout.module';
import MsStudentModule from './ms-student/ms-student.module';

@Module({
  imports: [
    ...GlobalModule.imports(),
    MsStudentModule,
    MsUserModule,
    MsWorkoutModule,
  ],
  providers: [...GlobalModule.providers()],
})
export default class AppsModule extends GlobalModule {
  static PORT = 3000;
}
