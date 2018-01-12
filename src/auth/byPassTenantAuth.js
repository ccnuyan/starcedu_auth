/*
  this middleware won't interupt the anonymous accessing
*/
export default async (req, res, next) => {
  // no authorization token: bypass
  if (!req.headers['starcedu-tenant-authorization']) { return next(); }

  // authorization not in right format: bypass
  const breaks = req.headers[serverConfig.auth.tenantHeader].split(' ');

  if (breaks.length !== 2) { return next(); }
  if (breaks[1] === 'null' || breaks[1] === 'undefined') { return next(); }

  try {
    // tenant basic authentication
    if (breaks[0] === 'basic') {
      const credentials = new Buffer(breaks[1], 'base64').toString().split(':');
      if (credentials.length === 2) {
        // validataion
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
