import user from './user';
import oauth from './oauth';


export default (app) => {
  app.get('/api/service/status', (req, res) => {
    res.json({
      code: 0,
      message: 'ok',
    });
  }); // notice here is use not route
  app.use('/api/user', (req, res, next) => {
    return user(req, res, next);
  }); // notice here is use not route
  app.use('/api/oauth', (req, res, next) => {
    return oauth(req, res, next);
  }); // notice here is use not route
};
