import config from '../../config';
import pgPool from '../../database/connector';

const generateCode = async ({ client, state, user_id }) => {
  return pgPool.query(`insert into ${config.dbname}.authorization_codes (client, state,  user_id) values ($1, $2, $3) returning *`, [client, state, user_id]) // eslint-disable-line max-len
    .then((res) => {
      if (res.rowCount === 1) {
        return {
          success: true,
          ...res.rows[0],
        };
      }
      return { success: false };
    });
};

const getCode = ({ code }) => {
  return pgPool.query(`select * from ${config.dbname}.authorization_codes where code=`, [code]) // eslint-disable-line
    .then((res) => {
      if (res.rowCount === 1) {
        return {
          success: true,
          ...res.rows[0],
        };
      }
      return { success: false };
    });
};


export default {
  generateCode,
  getCode,
};
