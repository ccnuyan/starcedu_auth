import { Router } from 'express';

import unlink from './unlink';
import signout from './signout';
import auth from '../authMiddleware';

const router = Router();

// these are for web business
router.get('/signout', signout);
router.put('/unlink', auth, unlink);

export default router;
