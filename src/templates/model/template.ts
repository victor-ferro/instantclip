//Data Transfer Object

import { User } from "../../users/model/user"

export class Template {
    id: string
    title: string
    thumbnailUrl: string
    creator: User
    music: string
    authorName: string
    authorAvatarUrl: string
    sample: string
    tags: string[]
    template: Templates
}

export class Templates{
    id: number
    duration: number
    soundUrl: string
    slots: Slot[]
}

export class Slot{
    id: number
    time: number
    type: string
}