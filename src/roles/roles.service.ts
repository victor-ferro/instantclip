import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './model/role';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>
  ){}
  create(createRoleDto: Role) {
    this.rolesRepository.insert(createRoleDto);
  }

  findAll() {
    return this.rolesRepository.find();
  }

  findOne(id: number) {
    return this.rolesRepository.findOneBy({id: id});
  }

  update(id: number, updateRoleDto: Role) {
    return this.rolesRepository.update({id: id}, updateRoleDto)
  }

  remove(id: number) {
    return this.rolesRepository.delete(id)
  }
}