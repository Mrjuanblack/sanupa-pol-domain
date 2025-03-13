"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleUserEntity = exports.UserEntity = exports.CompleteUserEntity = exports.CCTypeList = exports.CCType = exports.UserRoleList = exports.UserRole = void 0;
exports.getUserRoleString = getUserRoleString;
exports.getCCTypeString = getCCTypeString;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Admin"] = 2] = "Admin";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.UserRoleList = Object.values(UserRole).filter(value => typeof value === 'number');
function getUserRoleString(userRole) {
    switch (userRole) {
        case UserRole.User:
            return "Usuario";
        case UserRole.Admin:
            return "Administrador";
    }
}
var CCType;
(function (CCType) {
    CCType[CCType["CC"] = 1] = "CC";
    CCType[CCType["NIT"] = 2] = "NIT";
    CCType[CCType["PA"] = 3] = "PA";
    CCType[CCType["CE"] = 4] = "CE";
})(CCType || (exports.CCType = CCType = {}));
exports.CCTypeList = Object.values(CCType).filter(value => typeof value === 'number');
function getCCTypeString(ccType) {
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
class CompleteUserEntity {
    constructor(id, name, phone, ccType, cc, password, userRole) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.ccType = ccType;
        this.cc = cc;
        this.password = password;
        this.userRole = userRole;
    }
}
exports.CompleteUserEntity = CompleteUserEntity;
class UserEntity {
    constructor(id, name, phone, ccType, cc, userRole) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.ccType = ccType;
        this.cc = cc;
        this.userRole = userRole;
    }
}
exports.UserEntity = UserEntity;
class SimpleUserEntity {
    constructor(id, name, userRole) {
        this.id = id;
        this.name = name;
        this.userRole = userRole;
    }
}
exports.SimpleUserEntity = SimpleUserEntity;
