import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Music {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cancion: string;
}