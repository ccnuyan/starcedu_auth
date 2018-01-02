const signout = (req, res) => {
  req.session.oauthUser = {};
  res.json({
    code: 0,
    message: 'oauth session cleared',
  });
};

export default signout;
