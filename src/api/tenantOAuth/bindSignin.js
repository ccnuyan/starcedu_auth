import userServices from '../../services/userServices';
import paramsValidator from '../paramsValidator';

const bind_signin = async (req, res) => {
  const payload = {
    username: req.body.username,
    password: req.body.password,
    oauth_user_id: req.body.oauth_user_id,
  };
  if (req.user && req.user.id) {
    payload.username = req.user.username;
    const valRet = paramsValidator.validate(payload, ['password', 'oauth_user_id']);

    if (valRet.code !== 0) {
      return res.json(valRet);
    }
  } else {
    const valRet = paramsValidator.validate(payload, ['username', 'password', 'oauth_user_id']);
    if (valRet.code !== 0) {
      return res.json(valRet);
    }
  }

  const ret = await userServices.authenticate(payload, {
    gen_token: true,
    target_tenant: req.tenant.id,
  });

  if (ret.success) {
    res.json({
      code: 0,
      message: ret.message,
      data: ret,
    });
  } else {
    res.json({
      code: 400,
      message: ret.message,
    });
  }
};

export default bind_signin;
