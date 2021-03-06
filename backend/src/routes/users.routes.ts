import { Router } from 'express';
import { createUserHandler, getCurrentUserHandler } from '../controller/user.controller';
import currentUserCheck from '../middleware/currentUserCheck';
import validateResource from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';

const router = Router()

router.post("/", validateResource(createUserSchema),createUserHandler)
router.get("/me", currentUserCheck,getCurrentUserHandler)


export default router