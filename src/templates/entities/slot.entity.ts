import { Column, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Templates } from "./templates.entity";

@Entity()
export class Slot{
    @PrimaryGeneratedColumn()
    id: number

    @Column("decimal", { precision: 5, scale: 2 })
    time: number

    @Column()
    type: string

    @ManyToOne(() => Templates, (templates) => templates.slots)
    @JoinColumn({name: "templateId"})
    template: Templates
}