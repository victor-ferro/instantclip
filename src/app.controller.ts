import { Controller, Request, Post, UseGuards, Get, Response, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './users/model/user';

@Controller()
export class AppController {
  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() b: User, @Request() req, @Response() res) {
    console.log(b)
    const cookie = await this.authService.login(req.user);
    res.setHeader('Set-Cookie', cookie);
    return res.send(cookie);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req, @Response() res) {
    res.setHeader('Set-Cookie', await this.authService.logout());
    return res.sendStatus(200);
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