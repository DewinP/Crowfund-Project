import config from 'config';
import { Request, Response } from 'express';
import Stripe from 'stripe';
import { CreatePledgeInput, FindPledgeInput } from '../schema/pledge.schema';
import { createPledge, findAllPledges, findPledge } from '../service/pledge.service';
import { findProject } from '../service/project.service';

const stripe = new Stripe(config.get<string>("stripeKey"),{
  apiVersion: '2020-08-27',
})


export const createPledgeHandler = async (req: Request<{},{},CreatePledgeInput["body"]>, res: Response) => {
    const userId= res.locals.user._id
    const projectId = req.body.projectId;
    const sessionId = req.body.sessionId;

    const pledge = await findPledge({sessionId, projectId})

    //if user is revisiting link just get pledge created the first time
    if(pledge){
      return res.send(pledge)
    }
    
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log(session.success_url)
    const p = await findProject({projectId:projectId})
   if(p){
    try {
    await createPledge({amount: session.amount_total!, user:userId,project:p,projectName:p.title,sessionId: session.id, projectId:p._id })
    return res.sendStatus(201)
    } catch (error) {
 console.error(error)
      return res.sendStatus(403)
    }
  }

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