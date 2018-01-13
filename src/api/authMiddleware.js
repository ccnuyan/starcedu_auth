export default (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    return res.status(401).send({
      code: 401,
      message: 'user unauthenticated',
    });
  }
};
