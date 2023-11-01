import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { GlobalModule } from 'src/shared/utils/tools/global.module';

@Module({
  imports: [UsersModule, AuthModule],
  providers: [],
})
export default class MsUserModule extends GlobalModule {
  static PORT = 3000;
}
