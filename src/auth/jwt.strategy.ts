import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { jwtConstants } from "./constants";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from "./auth.service";
import { Request } from "express";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService, private readonly usersService: UsersService){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
                return request?.cookies?.Authentication;
              }]),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any){
        const user =  this.usersService.findOne(payload.username)
        if(user){
            return user;
        }
        throw new HttpException('User with this username does not exist', HttpStatus.NOT_FOUND)

    }
}