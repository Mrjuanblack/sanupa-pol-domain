export declare enum UserRole {
    User = 1,
    Admin = 2
}
export declare const UserRoleList: UserRole[];
export declare function getUserRoleString(userRole: UserRole): string;
export declare enum CCType {
    CC = 1,
    NIT = 2,
    PA = 3,
    CE = 4
}
export declare const CCTypeList: CCType[];
export declare function getCCTypeString(ccType: CCType): string;
export interface CompleteUser {
    id: number;
    name: string;
    phone: string;
    ccType: CCType;
    cc: string;
    password: string;
    active: boolean;
    userRole: UserRole;
}
export declare class CompleteUserEntity implements CompleteUser {
    id: number;
    name: string;
    phone: string;
    ccType: CCType;
    cc: string;
    password: string;
    active: boolean;
    userRole: UserRole;
    constructor(id: number, name: string, phone: string, ccType: CCType, cc: string, password: string, active: boolean, userRole: UserRole);
}
export interface User {
    id: number;
    name: string;
    phone: string;
    ccType: CCType;
    cc: string;
    userRole: UserRole;
    active: boolean;
}
export declare class UserEntity implements User {
    id: number;
    name: string;
    phone: string;
    ccType: CCType;
    cc: string;
    active: boolean;
    userRole: UserRole;
    constructor(id: number, name: string, phone: string, ccType: CCType, cc: string, active: boolean, userRole: UserRole);
}
export interface SimpleUser {
    id: number;
    name: string;
    userRole: UserRole;
}
export declare class SimpleUserEntity implements SimpleUser {
    id: number;
    name: string;
    userRole: UserRole;
    constructor(id: number, name: string, userRole: UserRole);
}
export interface CreateUserRequest {
    name: string;
    phone: string;
    ccType: CCType;
    cc: string;
    password: string;
}
export interface UpdateNameRequest {
    name: string;
}
export interface UpdatePasswordRequest {
    oldPassword: string;
    password: string;
}
export interface UpdatePhoneNumberRequest {
    phoneNumber: string;
}
export interface UpdateIdentificationRequest {
    ccType: CCType;
    cc: string;
}
export interface LoginRequest {
    phoneNumber: string;
    password: string;
}
