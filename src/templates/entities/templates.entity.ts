import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Template } from "./template.entity";

@Entity()
export class Templates {
    /*@PrimaryGeneratedColumn()
    @OneToOne(() => Template, (template) => template.template)
    @JoinColumn()
    id: number*/

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    duration: number

    @Column()
    soundUrl: string
}