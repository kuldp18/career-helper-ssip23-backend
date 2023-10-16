const User = require('../models/user');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt');

// user signup
exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: 'Not able to save user in DB',
      });
    }
    res.json({
      name: user.fullName,
      email: user.email,
      id: user._id,
    });
  });
};

// user signin
exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User email does not exist',
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password do not match',
      });
    }

    // create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    // put token in cookie
    res.cookie('token', token, { expire: new Date() + 9999 });

    // send response to front end
    const { _id, fullName, email, role } = user;
    return res.json({ token, user: { _id, fullName, email, role } });
  });
};

// user signout
exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'User signed out successfully!',
  });
};

// protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: 'auth',
  algorithms: ['HS256'],
});

// custom middlewares
exports.isAuthenticated = (req, res, next) => {
  // check if user is authenticated
  // check local storage for token
  let token = req.cookies.token;
  if (!token) {
    return res.status(403).json({
      error: 'Access denied! Please sign in first',
    });
  }
  // verify token
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        error: 'Access denied! Please sign in first',
      });
    }
    // add user id to request object
    req.profile = decoded;
    next();
  });
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0)
    return res
      .status(403)
      .json({ error: 'No Admin permissions found, access denied!' });
  next();
};
