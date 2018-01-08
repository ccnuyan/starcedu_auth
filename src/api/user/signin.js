import userServices from '../../services/userServices';
import config from '../../../config';
import paramsValidator from '../paramsValidator';

const signin = async (req, res) => {
  const payload = {
    autoSignin: req.body.autoSignin,
    username: req.body.username,
    password: req.body.password,
  };

  const valRet = paramsValidator.validate(payload, ['username', 'password']);
  if (valRet.code !== 0) {
    return res.json(valRet);
  }

  if (req.session.oauthUser && req.session.oauthUser.id) {
    payload.oauth_user_id = req.session.oauthUser.id;
  }

  const ret = await userServices.authenticate(payload);

  if (ret.success) {
    req.session.oauthUser = {};
    req.session.user = ret;
    if (payload.autoSignin === true) {
      req.session.cookie.maxAge = config.auth.cookie.maxage;
    } else {
      req.session.cookie.expires = false;
    }
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

export default signin;
