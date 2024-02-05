const conexion = require("../db")

module.exports = {
    insertar(user, pass) {
        return new Promise((resolve, reject) => {
            conexion.query(`select users.user, users.pass from login where user = ? and pass = ?`,
                [user, pass], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
}