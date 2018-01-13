import user from './user';
import oauth from './oauth';
import tenantAuthMiddleware from './tenantAuthMiddleware';
import tenantOAuth from './tenantOAuth';

export default (app) => {
  app.use('/api/local/user', user);
  app.use('/api/tenant/user', tenantAuthMiddleware, user);

  app.use('/api/local/oauth', oauth);
  app.use('/api/tenant/oauth', tenantAuthMiddleware, tenantOAuth);
};
