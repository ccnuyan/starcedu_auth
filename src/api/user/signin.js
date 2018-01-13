import userServices from '../../services/userServices';
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

  if (req.oauthUser && req.oauthUser.id) {
    payload.oauth_user_id = req.session.oauthUser.id;
  }

  const ret = await userServices.authenticate(payload, req.authConfig);

  if (ret.success) {
    if (req.session) {
      req.session.oauthUser = {};
      req.session.user = ret;
      if (payload.autoSignin === true) {
        req.session.cookie.maxAge = serverConfig.auth.cookie.maxage;
      } else {
        req.session.cookie.expires = false;
      }
    }
    res.json({
      data: ret,
      message: ret.message,
    });
  } else {
    if (req.session) {
      req.session.oauthUser = {};
      req.session.user = {};
    }
    res.status(400).json({
      message: ret.message,
    });
  }
};

export default signin;
