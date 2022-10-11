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

    @Column()
    duration: number

    @Column()
    soundUrl: string

    //@Column("simple-array")
    @OneToMany(() => Slot, (slot) => slot)
    slots: Slot[]


}