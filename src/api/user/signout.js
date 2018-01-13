const signout = (req, res) => {
  req.session.oauthUser = {};
  req.session.user = {};
  res.json({
    message: 'user cookie cleared',
  });
};

export default signout;

