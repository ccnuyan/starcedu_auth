import userServices from '../../services/userServices';
import paramsValidator from '../paramsValidator';

const update_password = async (req, res) => {
  const payload = {
    old_password: req.body.old_password,
    new_password: req.body.new_password,
  };

  payload.username = req.user.username;

  const valRet = paramsValidator.validate(payload, ['old_password', 'new_password']);
  if (valRet.code !== 0) {
    return res.json(valRet);
  }

  const ret = await userServices.update_password(payload);

  if (ret.success) {
    req.session.oauthUser = {};
    req.session.user = ret;
    res.status(200).json({
      data: ret,
      code: 0,
      message: ret.message,
    });
  } else {
    res.status(400).json({
      code: 400,
      message: ret.message,
    });
  }
};

export default update_password;
