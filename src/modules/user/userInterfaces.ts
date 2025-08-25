export enum Role{
    USER = "USER",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN"
};

export enum IActive{
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IUser{
    __id ? : string,
    userName : string,
    email : string,
    password : string,
    phone : string,
    address ?: string,
    role : Role,
    isVerifid ?: boolean,
    isDeleted : boolean,
    isActive : IActive,
    picture? : string
}