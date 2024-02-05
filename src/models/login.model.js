const { resolveInclude } = require("ejs")
const conexion = require("../db")
const bcryptjs = require('bcryptjs')
module.exports = {
    existe(user,pass){conexion.query(`select users.user,users.pass from users where users.user = ?`,
    [user,pass], async(error, resultados)=>{ 
      if(resultados.length == 0 || !(await bcryptjs.compare(pass,resultados[0].pass))){
        reject('Usuario o contraseña incorrectos');
      }else{
        resolve(resultados);
      }
    })
    }
}