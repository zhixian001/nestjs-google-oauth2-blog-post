import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getSecret() {
    return { secret: '🐭' };
  }
}
