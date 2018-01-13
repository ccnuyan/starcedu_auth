const me = async (req, res) => {
  if (req.session.user) {
    res.status(200).send({
      message: 'success',
      data: req.session.user,
    });
  } else {
    res.status(401).send({
      message: 'Unauthenticated',
    });
  }
};

export default me;
