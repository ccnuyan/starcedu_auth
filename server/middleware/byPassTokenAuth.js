/*
  this middleware won't interupt the anonymous accessingß
*/
import { verify } from '../../src/services/tokenServices';
import config from '../../config';
import pgPool from '../../database/connector';

export default async (req, res, next) => {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    return next();
  }
  // no authorization token: bypass
  if (!req.headers.authorization) {
    return next();
  }
  // authorization not in right format: bypass
  const breaks = req.headers.authorization.split(' ');
  if (breaks.length !== 2) {
    return next();
  }
  if (breaks[1] === 'null' || breaks[1] === 'undefined') {
    return next();
  }

  try {
    // user token authentication
    if (breaks[0] === 'bearer') {
      const decoded = verify(breaks[1]);
      const pres = await pgPool
        .query(`select * from ${config.dbname}.authenticate($1, $2, $3)`, ['token', breaks[1], 'token'])
        .then(ret => ret.rows[0]);

      if (pres.success) {
        req.user = decoded;
      }
    }
    // tenant basic authentication
    if (breaks[0] === 'basic') {
      const credentials = new Buffer(breaks[1], 'base64').toString().split(':');
      if (credentials.length === 2) {
        if (tenants[credentials[0]] && tenants[credentials[0]].pass === credentials[1]) {
          req.tenant = tenants[credentials[0]];
        }
      }
    }
  } catch (err) {
    global.printError(err, __filename);
  } finally {
    next();
  }
};
