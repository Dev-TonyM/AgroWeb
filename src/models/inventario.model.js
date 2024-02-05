const conexion = require('../db');
const inventario = {
    ver_inventario() {
        return new Promise((resolve, reject) => {
            conexion.query('select agropecuaria.id, agropecuaria.codigo, agropecuaria.nombre, agropecuaria.precio, categorias.nombre as categoria, agropecuaria.marca, agropecuaria.stock from agropecuaria join categorias on categorias.id = agropecuaria.categoria_id', (err,resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    },

    insertar_inventario(id, nombre, precio, categoria, marca, stock) {
        return new promise((resolve, reject) => {
            conexion.query('insert into agropecuaria (id, nombre, precio, categoria_id, marca, stock) values (?, ?, ?, ?, ?, ?)',[id, nombre,precio, categoria, marca, stock], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados.insertId);
            });
        });
    },

    modificar_inventario(id, nombre, precio, categoria, marca, stock) {
        return new Promise((resolve, reject) => {
            conexion.query('update agropecuaria set nombre = ?, precio = ?, categoria_id = ?, marca = ?, stock = ? where id = ?', [nombre, precio, categoria, marca, stock, id], (err, resultados) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

    borrar_inventario(id) {
        return new promise((resolve, reject) => {
            conexion.query('delete from agropecuaria where id=?', [id], (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

    buscar_inventario(codigo) {
        return new promise((resolve, reject) => {
            conexion.query('select agropecuaria.id, agropecuaria.codigo, agropecuaria.nombre, agropecuaria.precio, categorias.nombre as categoria, agropecuaria.marca, agropecuaria.stock from agropecuaria join categorias on categorias.id = agropecuaria.categoria_id where agropecuaria.codigo = ?', [codigo], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultado[0]);
            });
        });
    }    
}

module.exports = inventario;