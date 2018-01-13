import oauthServices from '../../services/oauthServices';
import paramsValidator from '../paramsValidator';

// should requested by local tenant
// directly sign in if provider and unique_provider_id are given by native app
// need tenant authentication

const signin = async (req, res) => {
  const payload = {
    provider: req.body.provider,
    unique_provider_id: req.body.unique_provider_id,
  };

  const valRet = paramsValidator.validate(payload, ['provider', 'unique_provider_id']);
  if (valRet.code !== 0) {
    return res.json(valRet);
  }

  const oauthUser = await oauthServices.get_oauth_user_by_provider_info(payload);

  if (!oauthUser) {
    return res.json({
      code: 400,
      message: 'oauth user not exist',
    });
  } else if (!oauthUser.user_id) {
    return res.json({
      code: 400,
      message: 'oauth user not bound',
      data: oauthUser,
    });
  }

  const loginInfo = await oauthServices.authenticate(payload);

  res.json({
    code: 0,
    message: 'oauth signin successfully',
    data: loginInfo,
  });
};

export default signin;
