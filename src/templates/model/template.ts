//Data Transfer Object

export class Template {
    id: string
    title: string
    thumbnailUrl: string
    creator: Creator
    music: string
    authorName: string
    authorAvatarUrl: string
    sample: string
    tags: string[]
    template: Templates
}

export class Creator{
    //userId: number
    name: string
    username: string
    avatarUrl: string
    password: string
}

export class Music{
    name: string
}

export class Templates{
    duration: number
    soundUrl: string
    slots: Slot[]
}

export class Slot{
    time: number
    type: string
}