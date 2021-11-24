import { createSessionSchema } from './schema/session.schema';
import { createUserSchema } from './schema/user.schema';
import { Express, Request,Response } from "express";
import { createUserHandler, getCurrentUserHandler } from "./controller/user.controller";
import validateResource from './middleware/validateResource'
import { createSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import requireUser from './middleware/requireUser';
import currentUserCheck from './middleware/currentUserCheck';

const routes = (app: Express) => {
    app.get("/", (_: Request, res:Response) => {
        res.send("Hello World!");
    });
    app.post("/api/users", validateResource(createUserSchema),createUserHandler)
    app.get("/api/me", currentUserCheck,getCurrentUserHandler)
    app.post("/api/sessions", validateResource(createSessionSchema),createSessionHandler)
    app.get("/api/sessions", requireUser, getUserSessionsHandler)
    app.delete("/api/sessions", requireUser, deleteSessionHandler)
}

export default routes;