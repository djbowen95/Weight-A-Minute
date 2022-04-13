const router = require('express').Router();
const { progress } = require('../../models/progress');
const withAuth = require('../../utils/auth');

router.get('/signUp', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('signUp');
  });

  module.exports = router;
