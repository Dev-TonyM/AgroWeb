const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/registro', function(req, res) {
  res.render('registro/view', { title: 'Registro' });
});

module.exports = router;