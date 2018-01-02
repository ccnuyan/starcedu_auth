import config from '../../../config';

const signout = (req, res) => {
  res.cookie(config.auth.cookie.name, '');
  req.session.oauthUser = {};
  res.json({
    code: 0,
    message: 'user cookie cleared',
  });
};

export default signout;

