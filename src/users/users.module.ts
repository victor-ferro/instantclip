import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSubscriber } from './users.subscriber';
import { BcryptOperator } from './bcryptOperator';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserSubscriber, BcryptOperator],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}