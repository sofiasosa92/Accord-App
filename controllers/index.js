const router = require('express').Router();
const login = require('./login.js');
const apiRoutes = require('./api');
//const homeRoute = require('./homeRoute.js');

//router.use('/', homeRoute);
router.use('/api', apiRoutes);

router.use('/login', login);
const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    // This is directly from the `/gallery/:id` and `/painting/:id` routes
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, execute the route function that will allow them to view the gallery
      // We call next() if the user is authenticated
      next();
    }
  };
router.use('/html/about.html', withAuth);
module.exports = router;
