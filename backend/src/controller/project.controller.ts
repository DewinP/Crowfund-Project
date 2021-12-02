import { Request, Response } from 'express';
import { CreateProjectInput, FindProjectInput, UpdateProjectInput } from '../schema/project.schema';
import { createProject, findAllProjects, findAndUpdateProject, findProject } from '../service/project.service';

export const createProjectHandler = async (req: Request<{},{},CreateProjectInput["body"]>, res: Response) => {
    const user= res.locals.user;
    const body = req.body;

    console.log(body);

    const project = await createProject({...body, user:user._id, creator:user.name});
    return res.status(200).json(project._id);
}

export const updateProjectHandler = async (req: Request<UpdateProjectInput["params"]>, res: Response) => {
    const userId= res.locals.user._id;
    const projectId = req.params.projectId;

    const updateBody = req.body;
    const project = await findProject({_id:projectId})
    if(!project){
        return res.sendStatus(404)
    }
    if(project.user != userId){
        return res.sendStatus(403)
    }

    let updated = await findAndUpdateProject({_id:projectId}, updateBody,{new:true})

    return res.send(updated)
}

 export async function findProjectHandler(
    req: Request<FindProjectInput["params"]>,
    res: Response
  ) {
    const projectId = req.params.projectId;
    const project = await findProject({_id:projectId});
  
    if (!project) {
      return res.sendStatus(404);
    }
  
    return res.send(project);
  }
  

  export async function findAllProjectsHandler(
    _: Request,
    res: Response
  ) {
    const projects = await findAllProjects({});
  
    return res.send(projects);
  }

  export async function findAllProjectsByUserHandler(
    _: Request,
    res: Response
  ) {
    const userId= res.locals.user._id;
    const projects = await findAllProjects({user:userId});

    return res.send(projects);
  }