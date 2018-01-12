import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import session from 'express-session';
import delay from 'express-delay';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connectRedis from 'connect-redis';

import config from '../config';
import byPassUserAuth from './middleware/byPassUserAuth';
import byPassTenantAuth from './middleware/byPassTenantAuth';
import crossDomain from './middleware/crossDomain';
import utilities from './middleware/utilities';
import routes from '../src';

import '../globals';
import './tenants';

const app = express();
const RedisStore = connectRedis(session);

// serve the app
const PORT = process.env.PORT || config.port;
global.report();

// express middleware
app.use(compression());

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/favicon.ico'));
});
// static resources
app.use('/static/', express.static(path.join(__dirname, '../build/')));
app.use('/static/', express.static(path.join(__dirname, '../public/')));

if (config.log) {
  app.use(morgan(config.log));
}
if (config.delay) {
  app.use(delay(0, config.delay));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(utilities.ajaxDetector);
app.use(crossDomain);

app.use(cookieParser());
const sessionConfig = {
  secret: config.auth.session.secret,
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true },
};

if (config.mode === 'test') {
  app.use('/api/local/*', session(sessionConfig));
} else {
  app.use('/api/local/*', session({ store: new RedisStore(config.redisSessionServer), ...sessionConfig }));
}

// auth
app.use('/api/tenant/*', byPassUserAuth);
app.use('/api/tenant/*', byPassTenantAuth);

// routes
routes.api(app);
if (config.mode !== 'test') {
  app.use(session({ store: new RedisStore(config.redisSessionServer), ...sessionConfig }));
  routes.web(app);
}

// run server
const server = app.listen(PORT, (err) => {
  if (err) {
    printError(err, __filename);
  } else {
    printMessage(`${config.title} is listening on port ${PORT}`, __filename);
  }
});

export default server;
