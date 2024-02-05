const express = require('express');
const router = express.Router();

const inventario = require('../models/inventario.model');

router.get('/', (req,res) => {
    inventario.ver_inventario().then(productos => {
        console.log(productos);
        res.render('inventario/view', { productos: productos });
    })
    .catch(err => {
        return res.status(500).send('Error en los productos ver' + err.message);
    });
});


// agregar
router.post('/agregar', (req,res)=> {
    const {codigo, nombre, precio, categoria, marca, stock} = req.body;
    if (!nombre || !precio || !categoria || !marca || !stock) {
        return res.status(500).send('Todos los campos son obligatorios');
    }
    inventario.insertar_inventario(codigo, nombre, precio, categoria, marca, stock).then(() => {
        res.redirect('/inventario/add');
    })
    .catch(err => {
        return res.status(500).send('Error en los productos agregar');
    });
});

//eliminar
router.get('/eliminar/:id', function(req,res) {
    inventario.borrar_inventario(req.params.id).then(() => {
        res.redirect('/inventario');
    })
    .catch(err => {
        return res.status(500).send('Error en los productos borrar');
    })
})

//Buscar
router.get('/buscar/:id', function(req,res) {
    inventario.buscar_inventario(req.params.id).then(producto => {
        if(producto) {
            res.render('inventario/editar', { producto: producto });
        }
        else{
            return res.status(500).send('No hay producto con ese codigo');
        }
    })
    .catch(err => {
        return res.status(500).send('Error en los productos buscar');
    });
});

//Editar
router.post('/editar/', function(req,res) {
    const {nombre, precio, categoria, marca, stock} = req.body;
    if(!nombre || !precio || !categoria || !marca || !stock) {
        return res.status(500).send('Datos insuficientes');
    }
    inventario.modificar_inventario(nombre, precio, categoria, marca, stock).then(() => {
        res.redirect('/inventario');
    })
    .catch(err => {
        return res.status(500).send('Error en los productos modificar');
    });
});

router.get('/add', (req,res)=> {
    res.render('inventario/add');
});
module.exports = router;