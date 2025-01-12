// src/routes/userRoutes.ts
import express from 'express';
import { createUser, getUsers, getUserById, deactivateUser } from '../controllers/userController';
import { validateId } from '../middlewares/validateId'; 

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', validateId, getUserById);
router.patch('/:id', validateId, deactivateUser);

export default router;
