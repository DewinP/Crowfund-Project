import { NextFunction, Request, Response } from "express";


/**
 * Middleware to require a user to be logged in.   
**/
const requireUser = (_:Request, res:Response, next:NextFunction)=>{
    const user = res.locals.user;
    
    if(!user){
        return res.sendStatus(403)
    }
    return next();
}

export default requireUser;