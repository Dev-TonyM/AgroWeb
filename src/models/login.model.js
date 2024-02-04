const conexion = require("../db")

module.exports = {
    insertar(user, pass) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into productos (nombre, precio) values (?, ?)`,
                [nombre, precio], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },
}