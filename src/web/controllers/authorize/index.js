import _ from 'lodash';
import querystring from 'querystring';

import tenants from '../../../../tenants.json';
import authorizeServices from '../../../services/authorizeServices';

const authorize = async (req, res, next) => {
  if (req.query.client && req.query.state) {
    const cl = req.query.client;
    if (tenants[cl]) {
      const tenant = _.pick(tenants[cl], ['id', 'title', 'description', 'redirect_url']);
      req.session.tenant = {
        state: req.query.state,
        ...tenant,
      };
      return res.redirect('/user/signin');
    }
  }
  next();
};

const decide = async (req, res) => {
  if (!req.session.tenant) { return res.redirect('/'); }
  const payload = {
    client: req.session.tenant.id,
    state: req.session.tenant.state,
    user_id: req.user.id,
  };
  const codeStruct = await authorizeServices.generateCode(payload);
  if (codeStruct.success) {
    const client = tenants[codeStruct.client];
    const query = querystring.stringify({
      code: codeStruct.code,
      state: codeStruct.state,
    });
    req.session.tenant = {};
    return res.redirect(`${client.redirect_url}?${query}`);
  }
  return res.redirect('/error');
};

const get_token = async (req, res) => {
  let tokenStruct = await authorizeServices.exchange_code_for_token({ code: req.query.code });
  if (tokenStruct.success) {
    tokenStruct = _.pick(tokenStruct, ['id', 'username', 'token']);
    return res.send({
      ...tokenStruct,
    });
  }
  return res.send({
    ...tokenStruct,
    message: 'get token error',
  });
};

export default {
  authorize,
  decide,
  get_token,
};
