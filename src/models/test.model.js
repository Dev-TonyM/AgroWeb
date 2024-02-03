const conexion = require("../db")
const test = {
    test_set(nombre) {//insertar estados
        return new Promise((resolve, reject) => {
            conexion.query(`insert into test (nombre) values (?)`,
                [nombre], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
            });
        });
    },
    test_get() {//visualizar estados
        return new Promise((resolve, reject) => {
            conexion.query(`select test.nombre,test.id from test`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
            });
        });
    },
}
module.exports = test