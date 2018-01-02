import oauthServices from '../../services/oauthServices';
import userServices from '../../services/userServices';
import paramsValidator from '../paramsValidator';

const unlink = async (req, res) => {
  const payload = {
    bind_user_id: req.user.id,
    oauth_user_id: req.body.oauth_user_id,
    password: req.body.password,
  };

  if (!paramsValidator.validate(payload,
    ['bind_user_id', 'oauth_user_id', 'password'],
    res)) {
    return;
  }

  const ret = await userServices.authenticate({
    username: payload.bind_user_id,
    password: payload.password,
  });

  if (ret.success) {
    await oauthServices.unlink_oauth_user({
      bind_user_id: req.user.id,
      oauth_user_id: req.body.oauth_user_id,
      password: req.body.password,
    });
    res.status(400).json({
      data: ret,
      code: 0,
      message: 'oauth user unlink successfully',
    });
  } else {
    res.status(400).json({
      code: 400,
      message: 'password invalid',
    });
  }
};

export default unlink;
