import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/students/students.module';
import { GlobalModule } from 'src/shared/utils/tools/global.module';
import { Paginator } from 'src/shared/utils/paginator';

@Module({
  imports: [StudentsModule],
  providers: [Paginator],
})
export default class MsStudentModule extends GlobalModule {
  static PORT = 3001;
}
