import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':username')
    findOne(@Param('username') username){
        return this.usersService.findOne(username)
    }
}
