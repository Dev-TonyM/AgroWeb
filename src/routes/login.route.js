const express = require('express');
const bcryptjs = require('bcryptjs');
const router = express.Router();
const conexion = require('../db');
const modelo = require('../models/login.model');

router.get('/login', function(req, res) {
  res.render('login/view', { error: null, title: 'Login' });
});
router.post('/login', async (req,res) =>{
  const user = req.body.user;
  const pass = req.body.pass;
  let passHash = await bcryptjs.hash(pass, 8)
  if(user && pass){
    conexion.query(`select users.user,users.pass from users where users.user = ?`,
    [user,pass], async(error, resultados)=>{ 
      if(resultados.length == 0 || !(await bcryptjs.compare(pass,resultados[0].pass))){
        res.render('login/view', {error: 'Usuario o contraseña incorrectos'});
      }else{
        console.log(resultados)
        res.redirect('/inventario');
      }
    })
  }
  
})
module.exports = router;