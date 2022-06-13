import { Module } from '@nestjs/common';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleOauthStrategy } from './google-oauth.strategy';
import { JwtAuthModule } from '../jwt-auth/jwt-auth.module';

import { UsersModule } from '../users/users.module';

@Module({
  imports: [JwtAuthModule, UsersModule],
  controllers: [GoogleOauthController],
  providers: [GoogleOauthStrategy],
})
export class GoogleOauthModule {}
