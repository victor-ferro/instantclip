import { Role } from "src/roles/role.enum"

export class User{
    userId: number
    name: string
    username: string
    avatarUrl: string
    password: string
    roles: Role[]
}