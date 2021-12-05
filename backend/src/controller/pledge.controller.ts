import { Request, Response } from 'express';
import Stripe from 'stripe';
import { CreatePledgeInput, FindPledgeInput } from '../schema/pledge.schema';
import { createPledge, findAllPledges, findPledge } from '../service/pledge.service';
import { findProject } from '../service/project.service';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
  apiVersion: '2020-08-27',
})



/**
 * Controller for creating a pledge
**/
export const createPledgeHandler = async (req: Request<{},{},CreatePledgeInput["body"]>, res: Response) => {
    const userId= res.locals.user._id
    const projectId = req.body.projectId;
    const sessionId = req.body.sessionId;

    const pledge = await findPledge({sessionId, project: projectId})

    //if user is revisiting link just get pledge created the first time
    if(pledge){
      return res.send(pledge)
    }
    
    // check if stripe session is valid
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    //If success_url doesnt include the project id that means that the current project is not the recipient of the pledge
    if(session.success_url.includes(projectId) && session.amount_total){
      const project = await findProject({_id:projectId})
      
      let pledge = await createPledge({amount: session.amount_total/100, user:userId,sessionId: session.id, project: projectId, projectName: project!.name, userName: res.locals.user.name})
      return res.status(201).json(pledge)
    }
    return res.sendStatus(403)

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