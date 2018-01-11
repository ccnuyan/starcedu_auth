import user from './user';
import oauth from './oauth';

export default (app) => {
  app.use('/api/user', (req, res, next) => {
    return user(req, res, next);
  });
  app.use('/api/oauth', (req, res, next) => {
    return oauth(req, res, next);
  });
};
