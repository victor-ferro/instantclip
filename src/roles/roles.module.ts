import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { APP_GUARD } from '@nestjs/core';
import { Roles } from './decorator/roles.decorator';
import { RolesGuard } from './decorator/roles.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService, {provide: APP_GUARD, useClass: RolesGuard}]
})
export class RolesModule {}
