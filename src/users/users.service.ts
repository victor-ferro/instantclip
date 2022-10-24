import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BcryptOperator } from './bcryptOperator';
import { User } from './entities/user.entity';

// This should be a real class/interface representing a user entity
//export type User = any;

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
    return this.usersRepository.findOneBy({ 'username': name });
  }

  async remove(username: string): Promise<void> {
    await this.usersRepository.delete(username);
  }

  async create(user: User){
    user.password = await this.bcryptOperator.createHash(user.password)
    this.usersRepository.insert(user);
  }

  async compare(realPass: string, hashPass: string){
    return await this.bcryptOperator.compare(realPass, hashPass);
  }

  async update(user: User, username: string){
    user.password = await this.bcryptOperator.createHash(user.password)
    await this.usersRepository.update({username: username}, user)
  }

  async createMany(users: User[]) {
    const queryRunner = this.dataSource.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(users[0]);
      await queryRunner.manager.save(users[1]);
  
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  } 

}