import { Router } from 'express';
import { createCommentHandler, findAllCommentsByProjectHandler, updateCommentHandler } from '../controller/comment.controller';
import requireUser from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import { createCommentSchema, updateCommentSchema } from '../schema/comment.schema';

const router = Router();

router.get('/project/:projectId',findAllCommentsByProjectHandler)
router.patch('/:commentId',[requireUser, validateResource(updateCommentSchema)],updateCommentHandler )
router.post('/:projectId',[requireUser, validateResource(createCommentSchema)],createCommentHandler )

export default router;