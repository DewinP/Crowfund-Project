export interface ISignupInput {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
}

export interface ILoginInput {
    email: string;
    password: string;
}

export interface IFieldError {
    field: string;
    message: string;
}


export interface IUser {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    session: string;
    iat: number;
    exp: number;
  }