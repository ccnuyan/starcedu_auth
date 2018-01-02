/*
  this middleware won't interupt the anonymous accessingß
*/

import { verify } from '../../src/services/tokenServices';
import oauthServices from '../../src/services/oauthServices';
import config from '../../config';
import pgPool from '../../database/connector';

export default async (req, res, next) => {
  // no authorization token: bypass
  if (req.cookies.authorization) {
    try {
      const decoded = verify(req.cookies.authorization);
      const pres = await pgPool
        .query(`select * from ${config.dbname}.authenticate($1,$2,$3)`, ['token', req.cookies.authorization, decoded.iss])
        .then(ret => ret.rows[0]);
      if (pres.success) {
        req.user = pres;
        req.user.token = '';
      }
    } catch (err) {
      global.printError(err, __filename);
    }
  }

  if (req.cookies.oauth) {
    try {
      const oauthUser = await oauthServices.get_oauth_user({ oauth_user_id: req.cookies.oauth });
      req.oauthUser = oauthUser;
    } catch (err) {
      global.printError(err, __filename);
    }
  }

  next();
};
