// src/routes/nightRoutes.ts
import express from 'express';
import { createNight, getNights, getNightById } from '../controllers/nightController';

const router = express.Router();

router.post('/', createNight);
router.get('/', getNights);
router.get('/:id', getNightById);

export default router;
