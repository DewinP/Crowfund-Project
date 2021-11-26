import config from 'config';
import { Express, Request, Response } from "express";
import Stripe from 'stripe';
import { findAllPledgesByProjectHandler, findAllPledgesByUserHandler } from './controller/pledge.controller';
import { createProjectHandler, findAllProjectsHandler, findProjectHandler, updateProjectHandler } from './controller/project.controller';
import { createSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import { createUserHandler, getCurrentUserHandler } from "./controller/user.controller";
import currentUserCheck from './middleware/currentUserCheck';
import requireUser from './middleware/requireUser';
import validateResource from './middleware/validateResource';
import { createPledgeSchema } from './schema/pledge.schema';
import { createProjectSchema, updateProjectSchema } from './schema/project.schema';
import { createSessionSchema } from './schema/session.schema';
import { createUserSchema } from './schema/user.schema';

const routes = (app: Express) => {

    const stripe = new Stripe(config.get<string>("stripeKey"),{
        apiVersion: '2020-08-27',
      })

    //users
    app.post("/api/users", validateResource(createUserSchema),createUserHandler)
    app.get("/api/me", currentUserCheck,getCurrentUserHandler)

    //sessions
    app.post("/api/sessions", validateResource(createSessionSchema),createSessionHandler)
    app.get("/api/sessions", requireUser, getUserSessionsHandler)
    app.delete("/api/sessions", requireUser, deleteSessionHandler)

    //project
    app.get("/api/projects/:projectId", findProjectHandler)
    app.get("/api/projects/", findAllProjectsHandler)
    app.post("/api/projects/", [requireUser,validateResource(createProjectSchema)], createProjectHandler)
    app.put("/api/projects",[requireUser,validateResource(updateProjectSchema)],updateProjectHandler)

    //pledges
    app.get('/api/pledges/project/:projectId',requireUser,findAllPledgesByProjectHandler)
    app.get('/api/pledges/', findAllPledgesByUserHandler)
    app.post('/api/pledges/',[requireUser,validateResource(createPledgeSchema)], createProjectHandler)

    //stripe
    app.post("/api/stripe/pay", async (req: Request, res:Response) => {
      try{
        let stripeRes = await stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: 'usd'
        })
        return res.send(stripeRes)
      }catch(e){
        return res.status(500).send(e)
      }
    });
    
}

export default routes;