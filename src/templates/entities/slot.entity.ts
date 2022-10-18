import { Column, Double, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Templates } from "./templates.entity";

@Entity()
export class Slot{
    @PrimaryGeneratedColumn()
    @ManyToOne(() => Templates, (templates) => templates.slots)
    @JoinColumn()
    id: number

    @Column("decimal", { precision: 5, scale: 2 })
    time: number

    @Column()
    type: string
}