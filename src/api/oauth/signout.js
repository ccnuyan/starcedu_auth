const signout = (req, res) => {
  req.session.oauthUser = {};
  res.json({
    message: 'oauth session cleared',
  });
};

export default signout;
