import { Express } from "express";
import pledgeRoute from "./pledges.routes";
import projectRoute from "./projects.routes";
import sessionRoute from "./sessions.routes";
import stripeRoute from './stripe.routes';
import userRoute from "./users.routes";


const routes = (app: Express) => {
    //users
    app.use('/api/users', userRoute)

    //sessions
    app.use('/api/sessions', sessionRoute)

    //project
    app.use('/api/projects', projectRoute)

    //pledges
    app.use('/api/pledges', pledgeRoute)

    //stripe
    app.use('/api/stripe', stripeRoute)
    
}

export default routes;