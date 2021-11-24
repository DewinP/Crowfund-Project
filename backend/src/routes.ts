import { createSessionSchema } from './schema/session.schema';
import { createUserSchema } from './schema/user.schema';
import { Express, Request,Response } from "express";
import { createUserHandler, getCurrentUserHandler } from "./controller/user.controller";
import validateResource from './middleware/validateResource'
import { createSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import requireUser from './middleware/requireUser';
import currentUserCheck from './middleware/currentUserCheck';
import { createProjectSchema, findProjectSchema, updateProjectSchema } from './schema/project.schema';
import { createProjectHandler, findProjectHandler, updateProjectHandler } from './controller/project.controller';

const routes = (app: Express) => {
    app.get("/", (_: Request, res:Response) => {
        res.send("Hello World!");
    });
    app.post("/api/users", validateResource(createUserSchema),createUserHandler)
    app.get("/api/me", currentUserCheck,getCurrentUserHandler)
    //sessions
    app.post("/api/sessions", validateResource(createSessionSchema),createSessionHandler)
    app.get("/api/sessions", requireUser, getUserSessionsHandler)
    app.delete("/api/sessions", requireUser, deleteSessionHandler)
    //project
    app.get("api/projects/", [requireUser, validateResource(findProjectSchema)], findProjectHandler)
    app.post("/api/projects/", [requireUser,validateResource(createProjectSchema)], createProjectHandler)
    app.put("api/projects",[requireUser,validateResource(updateProjectSchema)],updateProjectHandler)
    
}

export default routes;