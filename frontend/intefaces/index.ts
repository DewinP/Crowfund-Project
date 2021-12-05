export interface ISignupInput {
    email: string;
    password: string;
    passwordConfirmation: string;
    name: string;
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
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    session: string;
    iat: number;
    exp: number;
  }

  export interface IProject {
    _id: string;
    name:string;
    user:string;
    description: string;
    pledgeGoal: number;
    heroImage:string;
    createdAt: Date;
    updatedAt: Date;
    dueDate: Date;
    creator: string;
  }

  export interface IProjectInput{
      name:string;
      description: string;
      pledgeGoal: number;
      dueDate: Date;
      heroImage:string;
  }

  export interface IPaymentSessionInput{
      amount: number
      projectName:string
      projectId:string
  }




  export interface IPaymentSession{
    id:string,
  }

  export interface IPledgeInput{
      projectId:string;
      sessionId:string;
  }

  export interface ICommentInput{
    projectId:string;
    body:string;
}

export interface ISessionPayload{
    refreshToken:string;
    accessToken:string;
}


  export interface IPledge{
      _id:string;
      project: string;
      amount:number
      user:string;
      createdAt: string,
      updatedAt: string,
      userName:string,
      projectName:string,
  }

  export interface IFindAllPledgesInput{
      projectId: string;
      userId: string;
  }

  export interface IComment{
        _id:string;
        user:string;
        userName:string;
        project:string;
        body:string;
        createdAt:string;
        updatedAt:string;

  }