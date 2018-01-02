import userServices from '../../services/userServices';
import paramsValidator from '../paramsValidator';

const bind_signup = async (req, res) => {
  const payload = {
    username: req.body.username,
    password: req.body.password,
    oauth_user_id: req.body.oauth_user_id,
  };

  const valRet = paramsValidator.validate(payload, ['username', 'password', 'oauth_user_id']);
  if (valRet.code !== 0) {
    return res.json(valRet);
  }

  const ret = await userServices.register(payload);

  if (ret.success) {
    res.json({
      data: ret,
      code: 0,
      message: ret.message,
    });
  } else {
    res.json({
      code: 400,
      message: ret.message,
    });
  }
};

export default bind_signup;
