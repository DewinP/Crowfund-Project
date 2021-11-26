import config from 'config';
import { Request, Response, Router } from 'express';
import Stripe from 'stripe';

const router = Router();
const stripe = new Stripe(config.get<string>("stripeKey"),{
    apiVersion: '2020-08-27',
  })


  router.post("/api/stripe/secret", async (req: Request, res:Response) => {
    try{
      const amount = req.body.amount;
      let {client_secret} = await stripe.paymentIntents.create({
          amount: parseInt(amount, 10),
          currency: 'usd'
      })
      return res.send({client_secret})
    }catch(e){
      return res.status(405).send("Method not allowed")
    }
  });



export default router;