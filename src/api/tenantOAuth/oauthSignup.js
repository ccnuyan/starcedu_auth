import oauthServices from '../../services/oauthServices';
import paramsValidator from '../paramsValidator';

// should requested by local tenant
// directly sign up if provider and unique_provider_id are given by native app
// need tenant authentication

const signup = async (req, res) => {
  const payload = {
    provider: req.body.provider,
    unique_provider_id: req.body.unique_provider_id,
    profile: req.body.profile,
  };

  const valRet = paramsValidator.validate(payload, ['provider', 'unique_provider_id', 'profile']);
  if (valRet.code !== 0) {
    return res.json(valRet);
  }

  const oauthUser = await oauthServices.get_oauth_user_by_provider_info(payload);
  if (!oauthUser) {
    const ret = await oauthServices.add_oauth_user(payload);
    res.status(200).json({
      message: 'oauth user created',
      data: ret,
    });
  } else {
    const ret = await oauthServices.update_oauth_user(payload);
    res.status(200).json({
      message: 'oauth user updated',
      data: ret,
    });
  }
};

export default signup;