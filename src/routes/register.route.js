const express = require('express');
const bcryptjs = require('bcryptjs');
const router = express.Router();
const modelo = require('../models/register.model');

router.get('/registro', function(req, res) {
  res.render('registro/view', { error: null, title: 'Registro' });
});
router.post('/registro', async function(req, res) {
  const { nombre, apellido, user, pass} = req.body;
  let passHash = await bcryptjs.hash(pass, 8)
  if(!nombre || !apellido || !user || !pass){
    res.render('registro/view', {error: 'Todos los campos son obligatorios'});
  }else if(pass.length < 4){
    res.render('registro/view', {error: 'La contraseña debe ser mayor a 4 caracteres'});
  }else if(await modelo.existe(user) > [0]){
    res.render('registro/view', {error: 'El usuario ya existe'});
  }else{
    modelo.insertar(nombre,apellido,user,passHash) 
    .then(() => {
      res.redirect('/');
    }).catch(error => {
      res.send(error);
    });
  }
});

module.exports = router;