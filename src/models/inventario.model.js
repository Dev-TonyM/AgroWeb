const conexion = require('../db');
const inventario = {
    ver_inventario() {
        return new Promise((resolve, reject) => {
            conexion.query('select producto.id, producto.codigo, producto.nombre, producto.precio, categorias.nombre as categoria, producto.marca, producto.cantidad from producto join categorias on categorias.id = producto.categoria_id', (err,resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    insertar_inventario(codigo, nombre, precio, categoria, marca, stock) {
        return new Promise((resolve, reject) => {
            conexion.query('insert into producto (codigo, nombre, precio, categoria_id, marca, cantidad) values (?, ?, ?, ?, ?, ?)',[codigo, nombre,precio, categoria, marca, stock], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    },

    // edit (req,res) {
    //     const {id} = req.params;
    //     req.getConnection((err, conn) => {
    //         conn.query('select * from productos where id = ?', [id], (err, producto) => {
    //             res.render('inventario/edit', {
    //                 data: producto[0]
    //             })
    //         })
    //     })
    // },

    // update (req,res) {
    //     const {id} = req.params;
    //     const newProducto = req.body;
    //     req.getConnection((err, conn) => {
    //         conn.query('update inventario set codigo = ?,nombre = ?, precio = ?, categoria_id = ?, marca = ?, cantidad =? where id = ?', [newProducto.codigo, newProducto.nombre, newProducto.precio, newProducto.categoria, newProducto.marca, newProducto.stock, id], (err, rows) => {
    //             res.redirect('/inventario');
    //         })
    //     })
    // },



    // modificar_inventario(id, codigo, nombre, precio, categoria, marca, stock) {
    //     return new Promise((resolve, reject) => {
    //         conexion.query('UPDATE producto SET codigo = ?, nombre = ?, precio = ?, categoria_id = ?, marca = ?, cantidad = ? WHERE id = ?', [codigo, nombre, precio, categoria, marca, stock, id], (err) => {
    //             if (err) reject(err);
    //             else resolve();
    //         });
    //     });
    // },


    borrar_inventario(id) {
        return new Promise((resolve, reject) => {
            conexion.query('delete from producto where id=?', [id], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

    buscar_inventario(codigo) {
        return new Promise((resolve, reject) => {
            conexion.query('select producto.id, producto.codigo, producto.nombre, producto.precio, categorias.nombre as categoria, producto.marca, producto.cantidad from producto join categorias on categorias.id = producto.categoria_id where producto.codigo = ?', [codigo], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    }    
}

module.exports = inventario;