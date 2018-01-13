import user from './user';
import oauth from './oauth';
import tenantOAuth from './tenantOAuth';

export default (app) => {
  app.use('/api/local/user', user);
  app.use('/api/tenant/user', user);

  app.use('/api/local/oauth', oauth);
  app.use('/api/tenant/oauth', tenantOAuth);
};
