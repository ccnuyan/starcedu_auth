import indexHtml from './indexFabricator';

import callback from './controllers/oauth/callback';

import qq from './controllers/oauth/qq';

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
      req.session.callback = req.query.cb;
    } else {
      req.session.callback = '';
    }
    next();
  });

  app.get('/*', async (req, res) => {
    const preloadedState = {
      user: {
        user: req.user || {},
        oauthUser: (req.session && req.session.oauthUser) ? req.session.oauthUser : {},
      },
    };
    res.send(indexHtml.replace('_starc_server_state_', JSON.stringify(preloadedState, null, 2)));
  });
};
