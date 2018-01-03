import { expect } from 'chai';

import './testHelpers';
import config from '../../config';
import pgPool from '../connector';

const params = {
  username: 'testnewuser',
  password: 'password',
};

describe('REGISTRATION', () => {
  describe('with valid creds', () => {
    let regResult = null;
    before(async () => {
      await pgPool.query(`delete from ${config.dbname}.users where username=$1`, [params.username]);
      return pgPool.query(`select * from ${config.dbname}.register($1, $2)`, [
        params.username,
        params.password,
      ]).then((res) => {
        regResult = res.rows[0];
        return regResult;
      });
    });
    it('is successful', () => {
      expect(regResult.success).to.be.true;
    });
    it('returns a new id', () => {
      expect(regResult.id).to.not.be.null;
    });
    it('return a role', () => {
      expect(regResult.role).to.equal(-1);
    });
    it('returns correct username', () => {
      expect(regResult.username).to.equal(params.username);
    });
  });
  describe('trying an existing user', () => {
    let regResult = null;
    before(async () => {
      return pgPool.query(`select * from ${config.dbname}.register($1, $2)`, [
        params.username,
        params.password,
      ]).then((res) => {
        regResult = res.rows[0];
        return regResult;
      });
    });
    it('is not successful', () => {
      expect(regResult.success).to.be.false;
    });
  });
});
