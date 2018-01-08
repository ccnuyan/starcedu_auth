const signout = (req, res) => {
  req.session.oauthUser = {};
  req.session.user = {};
  res.json({
    code: 0,
    message: 'user cookie cleared',
  });
};

export default signout;

