import '../../config';

import pgPool from '../connector';

// http://chaijs.com/api/bdd/
after((done) => {
  pgPool.end();
  done();
});

