import _ from 'lodash';
import jsonwebtoken from 'jsonwebtoken';

import config from '../../config';
import pgPool from '../../database/connector';
import { sign } from './tokenServices';
import tenants from '../../tenants.json';

const generateCode = async ({ client, state, user_id }) => {
  return pgPool.query(`insert into ${config.dbname}.authorization_codes (client, state,  user_id) values ($1, $2, $3) returning *`, [client, state, user_id]) // eslint-disable-line max-len
    .then((res) => {
      if (res.rowCount === 1) {
        return { success: true, ...res.rows[0] };
      }
      return { success: false };
    });
};

const exchange_code_for_token = async ({ code, token }) => {
  const codeStruct = await pgPool.query(`select * from ${config.dbname}.authorization_codes where code=$1`, [code]).then((res) => {
    if (res.rowCount === 1) {
      return { success: true, ...res.rows[0] };
    }
    return { success: false };
  });
  if (!codeStruct.success) { return { success: false }; }

  console.log(tenants[codeStruct.client].key);

  const decodedcode = jsonwebtoken.verify(token, tenants[codeStruct.client].key);
  if (decodedcode !== code) { return { success: false }; }

  const user = await pgPool.query(`select * from ${config.dbname}.users where id=$1`, [codeStruct.user_id]).then(res => res.rows[0]);

  user.token = sign('local', { to: codeStruct.client, ...user });

  await pgPool.query(`select * from ${config.dbname}.add_login($1, $2, $3, $4)`, [user.id, 'token', user.token, 'token']);
  await pgPool.query(`delete from ${config.dbname}.authorization_codes where code=$1`, [code]);

  return {
    success: true,
    ...user,
  };
};


export default {
  generateCode,
  exchange_code_for_token,
};
