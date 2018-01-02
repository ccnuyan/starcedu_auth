import { Router } from 'express';

import unlink from './unlink';
import signout from './signout';
import oauthSignin from './oauthSignin';
import oauthSignup from './oauthSignup';
import bindSignin from './bindSignin';
import bindSignup from './bindSignup';
import auth from '../authMiddleware';
import client from './clientAuthMiddleware';

const router = Router();

// these are for web business
router.get('/signout', signout);
router.put('/unlink', auth, unlink);

// these are for client business
router.post('/oauth_signin', client, oauthSignin);
router.post('/oauth_signup', client, oauthSignup);

// these are for client business
router.post('/bind_signin', client, bindSignin);
router.post('/bind_signup', client, bindSignup);

export default router;
