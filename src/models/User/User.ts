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

export enum CCType {
    CC = 1,
    NIT = 2,
    PA = 3,
    CE = 4,
}
export const CCTypeList = Object.values(CCType).filter(value => typeof value === 'number');
export function getCCTypeString(ccType: CCType): string {
    switch (ccType) {
        case CCType.CC:
            return "CC";
        case CCType.NIT:
            return "NIT";
        case CCType.PA:
            return "PA";
        case CCType.CE:
            return "CE";
    }
}

export interface CompleteUser {
    id: number
    name: string
    phone: string
    ccType: CCType
    cc: string
    password: string

    active: boolean
    userRole: UserRole
}

export class CompleteUserEntity implements CompleteUser {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public ccType: CCType,
        public cc: string,
        public password: string,
        public active: boolean,
        public userRole: UserRole
    ) { }
}

export interface User {
    id: number
    name: string
    phone: string
    ccType: CCType
    cc: string

    userRole: UserRole
    active: boolean
}

export class UserEntity implements User {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public ccType: CCType,
        public cc: string,
        public active: boolean,
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

export interface CreateUserRequest {
    name: string
    phone: string
    ccType: CCType
    cc: string
    password: string
}

export interface UpdateNameRequest {
    name: string
}

export interface UpdatePasswordRequest {
    oldPassword: string
    password: string
}

export interface UpdatePhoneNumberRequest {
    phoneNumber: string
}

export interface UpdateIdentificationRequest {
    ccType: CCType
    cc: string
}

export interface LoginRequest {
    phoneNumber: string
    password: string
}