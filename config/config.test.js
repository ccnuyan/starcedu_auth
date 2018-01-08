// config for database test in remote server;
export default {
  mode: 'test',
  title: 'starC教育-test',
  port: 8001,
  domain: 'www.syncollege.com',
  log: false,
  maxDelay: 0,
  auth: {
    session: {
      secret: '12345678',
    },
    jwt: {
      secret: '12345678',
      expiresIn: '14d',
    },
    cookie: {
      maxage: 14 * 24 * 3600 * 1000,
      minage: 1 * 12 * 3600 * 1000,
    },
  },
  oauth: {
    qq: {
      app_id: '101271080',
      app_key: 'c89c950759846307af5a8425bb9a3a64',
      pcCodeHost: 'https://graph.qq.com/oauth2.0/authorize',
      pcTokenHost: 'https://graph.qq.com/oauth2.0/token',
      infoHost: 'https://graph.qq.com/user/get_user_info',
      pcOpenidHost: 'https://graph.qq.com/oauth2.0/me',
      redirect_uri: 'http://www.syncollege.com/oauth/callback/qq',
    },
  },
  dbname: 'starcedu_auth',
  pg: {
    user: process.env.DBUSER ? process.env.DBUSER : 'postgres',
    database: process.env.DBDATABASE ? process.env.DBDATABASE : 'postgres',
    password: process.env.DBPASSWORD ? process.env.DBPASSWORD : '',
    host: process.env.DBHOST ? process.env.DBHOST : 'database-test',
    port: process.env.DBPORT ? process.env.DBPORT : 5432,
    max: 2,
    idleTimeoutMillis: 30000,
  },
  resources: {
    stylesheets: {
      normalize: '//cdn.bootcss.com/normalize/6.0.0/normalize.min.css',
      semantic: '/static/semantic/semantic.min.css',
    },
    scripts: {
      jquery: '//cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
      html5shiv: '//cdn.bootcss.com/html5shiv/r29/html5.min.js',
      classlist: '//cdn.bootcss.com/classlist/2014.01.31/classList.min.js',
      semantic: '/static/semantic/semantic.min.js',
    },
  },
};
