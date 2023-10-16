const express = require('express');
const router = express.Router();

const { postCareer } = require('../controllers/career');

const { isSignedIn, isAuthenticated } = require('../controllers/auth');

router.post('/career', isSignedIn, isAuthenticated, postCareer);

module.exports = router;
