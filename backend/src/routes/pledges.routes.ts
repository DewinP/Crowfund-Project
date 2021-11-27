import { Router } from 'express';
import { createPledgeHandler, findAllPledgesByProjectHandler, findAllPledgesByUserHandler } from '../controller/pledge.controller';
import requireUser from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import { createPledgeSchema } from '../schema/pledge.schema';

const router = Router();

router.get('/project/:projectId',requireUser,findAllPledgesByProjectHandler)
router.get('/', findAllPledgesByUserHandler)
router.post('/',[requireUser,validateResource(createPledgeSchema)], createPledgeHandler)

export default router;