import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Slot } from "./slot.entity";
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

    @OneToMany(() => Slot, (slot) => slot.id)
    slots: Slot[]


}