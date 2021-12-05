import { Request, Response, Router } from 'express';
import Stripe from 'stripe';
import config from 'config'

const router = Router();
const stripe = new Stripe(config.get<string>('stripeKey'),{
    apiVersion: '2020-08-27',
  })


/**
 * Route to create a new customer session on stripe and return some of the customer's information to the client
**/

  router.post("/session/", async (req: Request, res:Response) => {
    const projectName = req.body.projectName
    const amount = req.body.amount
    const projectId = req.body.projectId
    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items:[
        {
          name:"Crowfund Company",
          amount: amount*100,
          currency: 'usd',
          quantity: 1,
          description: `You are pledging $${amount} towards the project: ${projectName}`
        }
      ],

      success_url: `${req.headers.origin}/projects/${projectId}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/projects/${projectId}/pledge`,
    }


    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
      params
    );
      let sessionInfo = {id: checkoutSession.id, intent: checkoutSession.payment_intent, totalAmount: checkoutSession.amount_total}
    return res.send(sessionInfo)
  });



export default router;