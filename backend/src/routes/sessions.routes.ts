import { Router } from 'express';
import { createSessionHandler, deleteSessionHandler, getUserSessionsHandler } from '../controller/session.controller';
import requireUser from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import { createSessionSchema } from '../schema/session.schema';

const router = Router();

router.post("/", validateResource(createSessionSchema),createSessionHandler)
router.get("/", requireUser, getUserSessionsHandler)
router.delete("/", requireUser, deleteSessionHandler)

export default router;

