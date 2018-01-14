import userServices from '../../services/userServices';
import paramsValidator from '../paramsValidator';

const bind_signup = async (req, res) => {
  const payload = {
    username: req.body.username,
    password: req.body.password,
    oauth_user_id: req.body.oauth_user_id,
  };

  const valRet = paramsValidator.validate(payload, ['username', 'password', 'oauth_user_id']);
  if (!valRet.status) {
    return res.status(400).json(valRet);
  }

  const ret = await userServices.register(payload, {
    gen_token: true,
    target_tenant: req.tenant.id,
  });

  if (ret.success) {
    res.json({
      data: ret,
      message: ret.message,
    });
  } else {
    res.status(400).json({
      message: ret.message,
    });
  }
};

export default bind_signup;
