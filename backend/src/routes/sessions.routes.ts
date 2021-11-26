import { Router } from 'express';
import { createSessionHandler, deleteSessionHandler, getUserSessionsHandler } from '../controller/session.controller';
import requireUser from '../middleware/requireUser';
import validateResource from '../middleware/validateResource';
import { createSessionSchema } from '../schema/session.schema';

const router = Router();

router.post("/api/sessions", validateResource(createSessionSchema),createSessionHandler)
router.get("/api/sessions", requireUser, getUserSessionsHandler)
router.delete("/api/sessions", requireUser, deleteSessionHandler)

export default router;

