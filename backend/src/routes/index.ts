import { Express } from "express";
import pledgeRoute from "./pledges.routes";
import projectRoute from "./projects.routes";
import sessionRoute from "./sessions.routes";
import stripeRoute from './stripe.routes';
import userRoute from "./users.routes";
import commentRoute from './comments.routes';


const routes = (app: Express) => {
    //users
    app.use('/api/users', userRoute)

    //sessions
    app.use('/api/sessions', sessionRoute)

    //projects
    app.use('/api/projects', projectRoute)

    //pledges
    app.use('/api/pledges', pledgeRoute)

    //comment
    app.use('/api/comments',commentRoute)

    //stripe
    app.use('/api/stripe', stripeRoute)
    
}

export default routes;