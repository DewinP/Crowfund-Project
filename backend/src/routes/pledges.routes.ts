import { Router } from 'express';
import { createPledgeHandler, findAllPledgesByProjectHandler, findAllPledgesByUserHandler } from '../controller/pledge.controller';
import requireUser from '../middleware/requireUser';

const router = Router();

router.get('/project/:projectId',requireUser,findAllPledgesByProjectHandler)
router.get('/',requireUser, findAllPledgesByUserHandler)
router.post('/',requireUser, createPledgeHandler)

export default router;