import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { AuthModule } from './modules/auth/auth.module';
import { GlobalModule } from 'src/shared/utils/tools/global.module';

@Module({
  imports: [...GlobalModule.imports(), UsersModule, AuthModule, RolesModule],
  providers: [...GlobalModule.providers()],
})
export default class MsUserModule extends GlobalModule {
  static PORT = 3000;
}
