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

    modificar_inventario(id, nombre, precio, categoria, marca, stock) {
        return new Promise((resolve, reject) => {
            conexion.query('update producto set nombre = ?, precio = ?, categoria_id = ?, marca = ?, cantidad = ? where id = ?', [nombre, precio, categoria, marca, stock, id], (err, resultados) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

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
                else resolve(resultados[0]);
            });
        });
    }    
}

module.exports = inventario;