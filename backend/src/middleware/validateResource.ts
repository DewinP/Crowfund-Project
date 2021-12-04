import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';


/**
 * Middleware to validate the request body against a Zod schema.  
**/
const validate = (schema:AnyZodObject)=> (req:Request, res:Response, next:NextFunction)=> {
    try {
        req.body.dueDate = new Date(req.body.dueDate)
        //allows us to validate the request body, query params, etc.
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        return next()
    } catch (error:any) {
        return res.status(400).send(error.errors)
    }
}

export default validate