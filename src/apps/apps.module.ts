import { Module } from '@nestjs/common';
import { GlobalModule } from 'src/shared/utils/tools/global.module';
import MsUserModule from './ms-user/ms-user.module';
import MsStudentModule from './ms-student/ms-student.module';
import MsTrainingPlanModule from './ms-treining-plan/ms-treining-plan.module';

@Module({
  imports: [
    ...GlobalModule.imports(),
    MsStudentModule,
    MsUserModule,
    MsTrainingPlanModule,
  ],
  providers: [...GlobalModule.providers()],
})
export class AppsModule extends GlobalModule {
  static PORT = 3000;
}
