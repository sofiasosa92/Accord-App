const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  console.log('Inside auth.js');
  console.log(req.session.loggedIn);
  if (!req.session.loggedIn) {
    res.redirect('/');
  } else {
    next();
  }
};

module.exports = withAuth;
