import { Router } from 'express'
import { createProjectHandler, findAllProjectsHandler, findProjectHandler, updateProjectHandler } from '../controller/project.controller'
import requireUser from '../middleware/requireUser'
import validateResource from '../middleware/validateResource'
import { createProjectSchema, updateProjectSchema } from '../schema/project.schema'

const router = Router()

router.get("/api/projects/:projectId", findProjectHandler)
router.get("/api/projects/", findAllProjectsHandler)
router.post("/api/projects/", [requireUser,validateResource(createProjectSchema)], createProjectHandler)
router.put("/api/projects",[requireUser,validateResource(updateProjectSchema)],updateProjectHandler)

export default router