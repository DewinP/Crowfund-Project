import config from 'config';
import { Request, Response } from 'express';
import Stripe from 'stripe';
import { CreatePledgeInput, FindPledgeInput } from '../schema/pledge.schema';
import { findAllPledges } from '../service/pledge.service';
import { findProject } from '../service/project.service';

const stripe = new Stripe(config.get<string>("stripeKey"),{
  apiVersion: '2020-08-27',
})


export const createPledgeHandler = async (req: Request<CreatePledgeInput["params"],{},CreatePledgeInput["body"]>, res: Response) => {
    const userId= res.locals.user._id
    const projectId = req.body.projectId;
    const sessionId = req.body.sessionId;
    
    //check if payment with this sessionID exist
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if(!session){
      return res.sendStatus(403)
    }

    try {
      const project = await findProject({projectId:projectId})
     
    } catch (error) {
      
    }
    



    // await createPledge({...body, user:userId,project:projectId })
    return res.status(200)
}

export async function findAllPledgesByProjectHandler(
    req: Request<FindPledgeInput["params"]>,
    res: Response
  ) {
    const projectId = req.body.projectId;
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