import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../database/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor( @InjectRepository(UserEntity) private userRepository: Repository<UserEntity> ){}
    
    getUsers():Promise<UserEntity[]>{
        return this.userRepository.find();
    }

    registerUser(user:UserEntity):Promise<UserEntity>{
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    loginUser(user:UserEntity):Promise<UserEntity>{
       return  this.userRepository.findOne({where: user});
    }
}
