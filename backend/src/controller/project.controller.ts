import { Request, Response } from 'express';
import { CreateProjectInput, FindProjectInput, UpdateProjectInput } from '../schema/project.schema';
import { createProject, findAllProjects, findAndUpdateProject, findProject } from '../service/project.service';

export const createProjectHandler = async (req: Request<{},{},CreateProjectInput["body"]>, res: Response) => {
    const userId= res.locals.user._id;
    const body = req.body;
    const project = await createProject({...body, user:userId});
    return res.status(200).json(project.projectId);
}

export const updateProjectHandler = async (req: Request<UpdateProjectInput["params"]>, res: Response) => {
    const userId= res.locals.user._id;
    const projectId = req.params.projectId;

    const updateBody = req.body;
    const project = await findProject({projectId})
    if(!project){
        return res.sendStatus(404)
    }
    if(project.user != userId){
        return res.sendStatus(403)
    }

    await findAndUpdateProject({projectId}, updateBody, {
        new:true
    })

    return res.sendStatus(204)
}

 export async function findProjectHandler(
    req: Request<FindProjectInput["params"]>,
    res: Response
  ) {
    const projectId = req.params.projectId;
    const project = await findProject({projectId});
  
    if (!project) {
      return res.sendStatus(404);
    }
  
    return res.send(project);
  }
  

  export async function findAllProjectsHandler(
    _: Request,
    res: Response
  ) {
    const projects = await findAllProjects();
  
    return res.send(projects);
  }