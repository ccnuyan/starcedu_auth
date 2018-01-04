/*
  this middleware won't interupt the anonymous accessingß
*/

export default async (req, res, next) => {
  req.user = req.session.user;
  next();
};
