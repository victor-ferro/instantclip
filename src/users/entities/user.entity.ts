
import { Role } from '../../roles/role.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, Unique, ManyToMany, JoinTable } from 'typeorm';
//import { Role } from '../../roles/entities/role.entity';

@Entity()
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  avatarUrl: string

  @Column()
  password: string;

  //@ManyToMany(() => Role)
  //@JoinTable()
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User
  })
  roles: Role
}