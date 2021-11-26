import { Router } from 'express';
import { findAllPledgesByProjectHandler, findAllPledgesByUserHandler } from '../controller/pledge.controller';
import { createProjectHandler } from '../controller/project.controller';
import requireUser from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import { createPledgeSchema } from '../schema/pledge.schema';

const router = Router();

router.get('/api/pledges/project/:projectId',requireUser,findAllPledgesByProjectHandler)
router.get('/api/pledges/', findAllPledgesByUserHandler)
router.post('/api/pledges/',[requireUser,validateResource(createPledgeSchema)], createProjectHandler)

export default router;