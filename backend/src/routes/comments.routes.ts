import { Router } from 'express';
import requireUser from '../middleware/requireUser';

const router = Router();

router.get('/:projectId',)
router.get('/',requireUser, )
router.post('/',requireUser, )

export default router;