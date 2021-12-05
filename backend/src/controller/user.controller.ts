
import {Request, Response} from 'express'
import _ from 'lodash'
import {AuthUser} from '../interfaces'
import { CreateUserInputType } from '../schema/user.schema'
import { createUser } from '../service/user.service'
import logger from '../utils/logger'


export async function createUserHandler(
    req: Request<{}, {}, CreateUserInputType["body"]>,
    res: Response) {
  try {
      const user = await createUser(req.body)
      return res.status(201).json(user)
  } catch (error) {
      logger.error(error)
      return res.status(409).send(error.message)
  }
}

export async function getCurrentUserHandler(_:Request,res:Response){
    const user:AuthUser = res.locals.user;
  
    return res.send(user)
}