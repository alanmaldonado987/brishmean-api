import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from '../database/entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    prueba:any;
    @Get()
    returnUsers():Promise<UserEntity[]>{
        return this.userService.getUsers()
    }
    //Registrar una cuenta
    @Post('/register')
    registerUser(@Body() newUser:UserEntity){
        return this.userService.registerUser(newUser);
    }
    //Logear la cuenta
    @Post('/login')
    loginUser(@Body() user:UserEntity){
        return this.userService.loginUser(user);
    }
}
