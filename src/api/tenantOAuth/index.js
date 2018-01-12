import { Router } from 'express';

import oauthSignin from './oauthSignin';
import oauthSignup from './oauthSignup';
import bindSignin from './bindSignin';
import bindSignup from './bindSignup';
import tenant from '../tenantAuthMiddleware';

const router = Router();

// these are for tenant business
router.post('/tenant/oauth_signin', tenant, oauthSignin);
router.post('/tenant/oauth_signup', tenant, oauthSignup);

// these are for tenant business
router.post('/tenant/bind_signin', tenant, bindSignin);
router.post('/tenant/bind_signup', tenant, bindSignup);

export default router;
