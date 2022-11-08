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

    @Column("decimal", { precision: 5, scale: 2 })
    duration: number

    @Column()
    soundUrl: string

    @OneToMany(() => Slot, (slot) => slot.template, {cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    slots: Array<Slot>

}