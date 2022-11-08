import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './model/user';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/decorator/roles.decorator';
import { Role } from 'src/roles/role.enum';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    
    @Get()
    @Roles(Role.User)
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':username')
    findOne(@Param('username') username){
        return this.usersService.findOne(username)
    }

    @Post()
    create(@Body() user: User){
        return this.usersService.create(user)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(":username")
    update(@Body() updateUser: User, @Param('username') username){
        this.usersService.update(updateUser, username);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":username")
    delete(@Param('username') username){
        this.usersService.remove(username);
    }

    @Post("multiple")
    createMany(@Body() users: User[]){
        this.usersService.createMany(users);
    }
}
