import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt-auth.strategy';

@Injectable()
export class JwtAuthService {
  private readonly logger: Logger = new Logger(JwtAuthService.name, true);
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  login(user) {
    const payload: JwtPayload = {
      username: user.username,
      sub: user.providerId,
    };
    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: parseInt(
          this.configService.get<string>('EXPIRES_IN_SECONDS'),
        ),
      }),
    };
  }
}
