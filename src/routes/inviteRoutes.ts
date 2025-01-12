// src/routes/inviteRoutes.ts
import express from 'express';
import { createInvite, getInvitesByNight } from '../controllers/inviteController';

const router = express.Router();

router.post('/', createInvite);
router.get('/:nightId/invites', getInvitesByNight);

export default router;
