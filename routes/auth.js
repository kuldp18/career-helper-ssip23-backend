const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { signout, signup, signin, isSignedIn } = require('../controllers/auth');

router.post(
  '/user/signup',
  [
    check('fullName', 'Fullname should be at least 3 char').isLength({
      min: 3,
    }),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should be at least 3 char').isLength({
      min: 3,
    }),
  ],
  signup
);

router.post(
  '/user/signin',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password field is required').isLength({ min: 1 }),
  ],
  signin
);

router.get('/signout', signout);

module.exports = router;
