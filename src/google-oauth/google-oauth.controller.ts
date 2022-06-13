import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
  Logger,
  Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { GoogleOauthGuard } from './google-oauth.guard';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';

@Controller('auth')
export class GoogleOauthController {
  private readonly logger = new Logger(GoogleOauthController.name, true);
  constructor(private jwtAuthService: JwtAuthService) {}

  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() _req) {
    // Guard redirects
  }

  @Get(['redirect'])
  @UseGuards(GoogleOauthGuard)
  @Redirect('/')
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    // For now, we'll just show the user object
    const { accessToken } = this.jwtAuthService.login(req.user);
    res.cookie('jwt', accessToken);

    return req.user;
  }
}
