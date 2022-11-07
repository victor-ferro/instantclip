import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BcryptOperator } from './bcryptOperator';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
    private bcryptOperator: BcryptOperator,
  ){}

  findAll():Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(name: string): Promise<User> {
    return this.usersRepository.findOne({where:{username: name} });
  }

  async remove(username: string): Promise<void> {
    await this.usersRepository.delete(username);
  }

  async create(user: User){
    this.usersRepository.insert(user).catch((err: any)=> {
      console.log(err);
      //return err.sqlMessage;
    });
  }

  async compare(realPass: string, hashPass: string){
    return await this.bcryptOperator.compare(realPass, hashPass);
  }

  async update(user: User, username: string){
    await this.usersRepository.update({username: username}, user)
  }

  async createMany(users: User[]) {
    this.usersRepository.save(users).catch((err: any) => {
      console.log(err);
    })
  } 

}