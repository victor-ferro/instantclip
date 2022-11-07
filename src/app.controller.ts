import { Controller, Request, Post, UseGuards, Get, Response, Res, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Template } from './templates/model/template';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    const cookie = this.authService.getCookieWithJwtToken(req.user);
    res.setHeader('Set-Cookie', cookie)
    return res.send(cookie);
  }

  @UseGuards(JwtAuthGuard)
  @Post('log-out')
  async logOut(@Request() request, @Res() response) {
    response.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
    return response.sendStatus(200);
  }

  @Get()
  async helloWorld(){
    return "Hello World!"
  }
  @Get('/token')
  async token(){
    return this.authService.default_login()
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user;
  }
}