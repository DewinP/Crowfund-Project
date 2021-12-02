import { Router } from 'express'
import { createProjectHandler, findAllProjectsByUserHandler, findAllProjectsHandler, findProjectHandler, updateProjectHandler } from '../controller/project.controller'
import requireUser from '../middleware/requireUser'
import validateResource from '../middleware/validateResource'
import { createProjectSchema, updateProjectSchema } from '../schema/project.schema'

const router = Router()

router.get("/user",requireUser, findAllProjectsByUserHandler)
router.get("/:projectId", findProjectHandler)
router.get("/", findAllProjectsHandler)
router.patch("/:projectId", [requireUser, validateResource(updateProjectSchema)], updateProjectHandler)
router.post("/", [requireUser,validateResource(createProjectSchema)], createProjectHandler)
router.put("/",[requireUser,validateResource(updateProjectSchema)],updateProjectHandler)
router.delete("/:projectId", requireUser)

export default router