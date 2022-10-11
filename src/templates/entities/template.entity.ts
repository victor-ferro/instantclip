import { User } from '../../users/entities/user.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Templates } from './templates.entity';

@Entity()
export class Template {
    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    thumbnailUrl: string

    @ManyToOne(() => User, (user) => user.userId)
    creator: User

    //@ManyToOne(() => Music, (music) => music.id)
    @Column()
    music: string

    @Column()
    authorName: string

    @Column()
    authorAvatarUrl: string

    @Column()
    sample: string

    @Column("simple-array")
    tags: string[]
    /*@Column('text', {array: true})
    tags: string[]*/

    @OneToOne(() => Templates)
    @JoinColumn()
    template: Templates

    /*@OneToOne(() => Templates, (templates) => templates.id)
    template: Templates*/
}