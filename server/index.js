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
import byPassTokenAuth from './middleware/byPassTokenAuth';
import byPassCookieAuth from './middleware/byPassCookieAuth';
import crossDomain from './middleware/crossDomain';
import utilities from './middleware/utilities';
import routes from '../src';

import '../globals';

const app = express();
const RedisStore = connectRedis(session);

// serve the app
const PORT = process.env.PORT || config.port;
global.report();

// express middleware
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

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

// custom middlewares
app.use(utilities.ajaxDetector);
app.use(crossDomain);

const sessionConfig = {
  secret: config.auth.session.secret,
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true },
};

if (config.mode === 'production') {
  app.use(session({
    store: new RedisStore(config.redisSessionServer),
    ...sessionConfig,
  }));
} else {
  app.use(session(sessionConfig));
}


// ajaxDetector
app.use(utilities.ajaxDetector);

// auth
app.use(byPassCookieAuth);
app.use(byPassTokenAuth);

// routes
routes(app);

// run server
const server = app.listen(PORT, (err) => {
  if (err) {
    printError(err, __filename);
  } else {
    printMessage(`${config.title} is listening on port ${PORT}`, __filename);
  }
});

export default server;
