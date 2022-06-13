import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../jwt-auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  private logger = new Logger(UsersController.name, true);
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('secret')
  // INFO: If you fetch `@Res() res` you should maually end the response.
  public getSecret(@Req() req) {
    return this.usersService.getSecret();
  }
}
