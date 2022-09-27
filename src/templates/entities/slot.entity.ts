import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Templates } from "./templates.entity";

@Entity()
export class Slot{
    @PrimaryGeneratedColumn()
    @ManyToOne(() => Templates, (templates) => templates.slots)
    id: number

    @Column()
    time: number

    @Column()
    type: string
}