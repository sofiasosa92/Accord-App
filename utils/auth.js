const withAuth = (req, res, next) => {
  // If there is no stored user (both a session and sequelize user id), then go to log in.
  if (!req.app.locals.currentID) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = withAuth;
