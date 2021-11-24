export interface ISignupInput {
    email: string;
    password: string;
    passwordConfirmation: string;
    name: string;
}

export interface ILoginInput {
    email: string;
    password: string;
}

export interface IFieldError {
    field: string;
    message: string;
}

export interface IMe{
    email:string;
    name:string;
    createdAt:Date;
    updatedAt:Date;
}

export interface IUser {
    _id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    session: string;
    iat: number;
    exp: number;
    avatarNumber:string;
  }