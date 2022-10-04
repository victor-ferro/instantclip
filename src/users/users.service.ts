import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';

// This should be a real class/interface representing a user entity
//export type User = any;

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource
  ){}

  private readonly users = [
    {
      userId: 1,
      name: 'john',
      avatarUrl: 'johnjohn',  
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      name: 'toni',
      avatarUrl: 'toni_11',
      username: 'antonio',
      password: 'lopez',
    },
    {
      userId: 3,
      name: 'victor',
      avatarUrl: 'victor_11',
      username: 'victor',
      password: 'fernandez'
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  findAll():Promise<User[]> {
    return this.usersRepository.find();
  }

  findJustOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ 'userId': id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
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