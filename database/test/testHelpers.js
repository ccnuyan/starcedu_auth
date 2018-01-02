import pgPool from '../connector';
// http://chaijs.com/api/bdd/

after(() => {
  pgPool.end();
});

