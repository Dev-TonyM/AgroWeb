const express = require('express')
const session = require('express-session')
const app = express()
const path = require('path')

//config del entorno
const dotenv = require('dotenv')
dotenv.config({path:'./env/.env'})

//encriptador de contraseñas
const bcryptjs = require('bcryptjs') 

//rutas
const routeindex = require('./routes/index');
app.use ('/', routeindex);

//sesiones
app.use(session({
  secret:'admin',
  resave: true,
  saveUninitialized: true
}))





// motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// archivos estaticos
app.use(express.static(path.join(__dirname,'../public')));

//tremendo el bootstrap
app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));
app.use("/icons",express.static("./node_modules/bootstrap-icons"));

//aca le digo donde esta el error 404
app.use((req,res)=>{
  res.sendFile(path.join(__dirname,'../public/html/error.html'));
});

//aca es para poder sacar valores del formulario
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//servidor en escucha
app.listen(puerto, () => {
    console.log('Servidor en espera')
  });