import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/students/students.module';
import { GlobalModule } from 'src/shared/utils/tools/global.module';

@Module({
  imports: [...GlobalModule.imports(), StudentsModule],
  providers: [...GlobalModule.providers()],
})
export default class MsStudentModule extends GlobalModule {
  static PORT = 3001;
}
