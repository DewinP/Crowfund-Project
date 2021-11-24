import {Request,Response, NextFunction} from 'express'
import {AnyZodObject} from 'zod'

const validate = (schema:AnyZodObject)=> (req:Request, res:Response, next:NextFunction)=> {
    try {
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