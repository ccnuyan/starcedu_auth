import indexHtml from './indexFabricator';
import callback from './controllers/oauth/callback';
import qq from './controllers/oauth/qq';
import authorize from './controllers/authorize';

const oauthControllers = { callback };
const oauthProviders = { qq };

export default (app) => {
  Object.keys(oauthControllers).forEach((ck) => {
    app.use(`/oauth/${ck}`, (req, res, next) => {
      return oauthControllers[ck](req, res, next);
    }); // notice here is use not route
  });

  Object.keys(oauthProviders).forEach((ck) => {
    app.use(`/oauth/luanch/${ck}`, (req, res, next) => {
      return oauthProviders[ck](req, res, next);
    }); // notice here is use not route
  });

  app.get('/user/signin', (req, res, next) => {
    if (req.query.cb) {
      if (req.session) {
        req.session.callback = req.query.cb;
      }
    } else {
      if (req.session) { // eslint-disable-line
        req.session.callback = '';
      }
    }
    next();
  });

  app.get('/user/authorize', authorize.authorize);
  app.post('/user/decide', authorize.decide);
  app.get('/user/token_by_code', authorize.get_token);

  app.get('/*', async (req, res) => {
    const preloadedState = {
      user: {
        user: req.user || {},
        oauthUser: req.session.oauthUser || {},
        tenant: req.session.tenant || {},
      },
    };
    res.send(indexHtml.replace('_starc_server_state_', JSON.stringify(preloadedState, null, 2)));
  });
};
