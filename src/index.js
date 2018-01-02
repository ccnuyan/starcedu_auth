import api from '../src/api/';
import web from '../src/web/';
import config from '../config';

export default (app) => {
  api(app);
  if (config.mode !== 'test') {
    web(app);
  }
};

