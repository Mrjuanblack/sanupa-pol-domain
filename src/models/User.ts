export enum UserRole {
    User = 1,
    Admin = 2
}
export const UserRoleList = Object.values(UserRole).filter(value => typeof value === 'number');
export function getUserRoleString(userRole: UserRole): string {
    switch (userRole) {
        case UserRole.User:
            return "Usuario";
        case UserRole.Admin:
            return "Administrador";
    }
}

export interface User {
    id: number
    name: string
    phone: string
    password: string

    userRole: UserRole
}

export class UserEntity implements User {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public password: string,
        public userRole: UserRole
    ) { }
}

export interface SimpleUser {
    id: number
    name: string
    userRole: UserRole
}

export class SimpleUserEntity implements SimpleUser {
    constructor(
        public id: number,
        public name: string,
        public userRole: UserRole
    ) { }
}