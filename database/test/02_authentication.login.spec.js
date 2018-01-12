import { expect } from 'chai';

import './testHelpers';
import pgPool from '../connector';

let regResult = null;
const params = {
  username: 'ccnuyan',
  password: 'password',
};

describe('authentication', () => {
  before(async function init() {
    this.timeout(10000);
    await pgPool.query(`select * from ${serverConfig.dbname}.register($1, $2)`, [
      params.username,
      params.password,
    ]).then((res) => {
      regResult = res.rows[0];
      return regResult;
    });
    return Promise.resolve();
  });

  describe('with a valid login', () => {
    let authResult = null;
    before(() => {
      return pgPool.query(`select * from ${serverConfig.dbname}.authenticate($1, $2)`, [params.username, params.password])
      .then((res) => {
        authResult = res.rows[0];
        return authResult;
      });
    });
    it('is successful', () => {
      expect(authResult.success).to.be.true;
    });
  });

  describe('invalid login', () => {
    let authResult = null;
    before(() => {
      return pgPool.query(`select * from ${serverConfig.dbname}.authenticate($1, $2)`, [params.username, 'password1'])
      .then((res) => {
        authResult = res.rows[0];
        return authResult;
      });
    });
    it('is not successful', () => {
      expect(authResult.success).to.be.false;
    });
  });
});
