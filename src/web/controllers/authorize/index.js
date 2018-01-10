import _ from 'lodash';
import querystring from 'querystring';

import tenants from '../../../../tenants.json';
import { sign } from '../../../services/tokenServices';

const authorize = (req, res, next) => {
  if (req.query.client && req.query.redirect && req.query.state) {
    const cl = req.query.client;
    if (tenants[cl]) {
      const tenant = _.pick(tenants[cl], ['title', 'description', 'redirect_url']);
      req.session.tenant = {
        state: req.query.state,
        ...tenant,
      };
      return res.redirect('/user/signin');
    }
  }
  next();
};

const decide = (req, res) => {
  if (!req.session.tenant) {
    return res.redirect('/');
  }

  req.session.tenant.code = 'code';

  const payload = {
    state: req.session.tenant.state,
    code: 'authorize_code',
  };

  const token = sign('local', req.user);

  const query = querystring.stringify(payload);

  res.redirect(`${req.session.tenant.redirect_url}?${query}`);
};

export default {
  authorize,
  decide,
};
