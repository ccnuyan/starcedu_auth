import userServices from '../../services/userServices';
import paramsValidator from '../paramsValidator';

const signup = async (req, res) => {
  const payload = {
    username: req.body.username,
    password: req.body.password,
  };

  const valRet = paramsValidator.validate(payload, ['username', 'password']);
  if (valRet.code !== 0) {
    return res.json(valRet);
  }

  if (req.oauthUser && req.oauthUser.id) {
    payload.oauth_user_id = req.oauthUser.id;
  }

  const ret = await userServices.register(payload, req.authConfig);

  if (ret.success) {
    req.session.oauthUser = {};
    req.session.user = ret;
    res.json({
      data: {
        ...ret,
        callback: req.session.callback || '/',
      },
      code: 0,
      message: ret.message,
    });
    req.session.callback = '/';
  } else {
    req.session.oauthUser = {};
    req.session.user = {};
    res.json({
      code: 400,
      message: ret.message,
    });
    req.session.callback = '/';
  }
};

export default signup;
