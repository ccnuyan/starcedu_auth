import config from '../../config';
import { sign } from './tokenServices';
import pgPool from '../../database/connector';

const authenticate = async ({ username, password, oauth_user_id }) => {
  let user = {};
  if (oauth_user_id) {
    // 对应绑定业务
    const oauth_user = await pgPool
      .query(`select * from ${config.dbname}.oauth2Users where id = $1`, [oauth_user_id])
      .then(res => res.rows[0]);
    user = await pgPool
      .query(`select * from ${config.dbname}.authenticate($1, $2, $3, $4)`, [username, password, 'local', oauth_user.id])
      .then(res => res.rows[0]);
  } else {
    user = await pgPool
      .query(`select * from ${config.dbname}.authenticate($1, $2)`, [username, password])
      .then(res => res.rows[0]);
  }

  if (user.success) {
    user.token = sign('token', user);// 添加login
    await pgPool.query(`select * from ${config.dbname}.add_login($1, $2, $3, $4)`, [user.id, 'token', user.token, 'token']);
    return user;
  }
  return user;
};

const register = async ({ username, password, oauth_user_id }) => {
  let user = {};
  if (oauth_user_id) {
    // 对应基于第三方账户注册新用户的业务
    user = await pgPool
      .query(`select * from ${config.dbname}.register($1,$2,$3)`, [
        username,
        password,
        oauth_user_id,
      ])
      .then((dbres) => {
        const registerInfo = dbres.rows[0];
        return registerInfo;
      });
  } else {
    user = await pgPool
      .query(`select * from ${config.dbname}.register($1,$2)`, [username, password])
      .then((dbres) => {
        const registerInfo = dbres.rows[0];
        return registerInfo;
      });
  }
  if (user.success) {
    user.token = sign('token', user);
    await pgPool.query(`select * from ${config.dbname}.add_login($1, $2, $3, $4)`, [user.id, 'token', user.token, 'token']);
    return user;
  }
  return user;
};

const username_check = ({ username }) => {
  return pgPool.query(`select * from ${config.dbname}.users where username=$1`, [username])
    .then((res) => {
      return {
        valid: res.rowCount < 1,
        username,
      };
    });
};

const update_password = ({ username, old_password, new_password }) => {
  return pgPool.query(`select * from ${config.dbname}.update_password($1, $2, $3)`, [username, old_password, new_password])
    .then((res) => {
      if (res.rowCount === 1) {
        const ret = res.rows[0];
        return ret;
      }
      return { success: false, message: '密码更新失败' };
    });
};

export default {
  authenticate,
  register,
  username_check,
  update_password,
};
