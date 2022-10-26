import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, Unique } from 'typeorm';

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
}