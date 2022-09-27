import { Entity, PrimaryColumn, Column } from 'typeorm'
@Entity()
export class Template{
    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    thumbnailUrl: string

    /*@Column()
    creator: Creator

    @Column()
    music: Music*/

    @Column()
    authorName: string

    @Column()
    authorAvatarUrl: string

    @Column()
    sample: string

    @Column()
    tags: string

    /*@Column()
    template: Templates*/
}


@Entity()
export class Creator{
    @PrimaryColumn()
    name: String

    @PrimaryColumn()
    username: string

    @Column()
    avatarUrl: string

}
@Entity()
export class Music{
    @PrimaryColumn()
    name: string
}

@Entity()
export class Templates{
    @Column()
    duration: number

    @Column()
    soundUrl: string

    @Column()
    slots: Slot[]

}

@Entity()
export class Slot{
    @Column()
    time: number

    @Column()
    type: string
}
