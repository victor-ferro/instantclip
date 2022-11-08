import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt'
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ){}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username)
        if(user && (await this.usersService.compare(pass, user.password))){
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {
            username: user.username, sub: user.userId
        };
        const token = this.jwtService.sign(payload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${jwtConstants.timeToExpire}`;
    }

    async logout(){
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }

    async default_login() {
        const payload = {
            username: "conrado", sub: 8888
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
