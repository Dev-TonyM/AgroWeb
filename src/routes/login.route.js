const express = require('express');
const router = express.Router();
const login_model = require('../models/login.model');

router.get('/login', function(req, res) {
  res.render('login/view');
});
router.post('/login/auth', function(req, res) {
  ;
});

module.exports = router;