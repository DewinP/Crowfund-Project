import { Request, Response } from 'express';
import { CreatePledgeInput, FindPledgeInput } from '../schema/pledge.schema';
import { createPledge, findAllPledges } from '../service/pledge.service';


export const createPledgeHandler = async (req: Request<FindPledgeInput["params"],{},CreatePledgeInput["body"]>, res: Response) => {
    const userId= res.locals.user._id
    const projectId = req.params.projectId;
    const body = req.body
    await createPledge({...body, user:userId,project:projectId })
    return res.status(201)
}

export async function findAllPledgesByProjectHandler(
    req: Request<FindPledgeInput["params"]>,
    res: Response
  ) {
    const projectId = req.params.projectId;
    const pledges = await findAllPledges({project:projectId});
    return res.send(pledges);
}

export async function findAllPledgesByUserHandler(
    _: Request,
    res: Response
  ) {
    const userId = res.locals.user._id;
    const pledges = await findAllPledges({user:userId});
    return res.send(pledges);
}