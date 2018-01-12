import api from '../src/api/';
import web from '../src/web/';
import config from '../config';

import session from './auth/sessionMiddleware';
import tenant from './auth/byPassTenantAuth';
import user from './auth/byPassUserAuth';

export default {
  api: (app) => {
    app.use('/api/local/*', session);

    app.use('/api/tenant/*', tenant, user);

    api(app);

    app.use('/api/*', (req, res) => {
      res.status(404).send({
        message: 'No such business',
      });
    });
  },
  web: (app) => {
    if (config.mode !== 'test') {
      app.use('/*', session);
      web(app);
    }
  },
};

