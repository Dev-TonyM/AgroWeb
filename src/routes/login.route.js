const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/login', function(req, res) {
  res.render('login/view');
});
router.get('/test', function(req, res) {
  res.render('login/test');
});

module.exports = router;