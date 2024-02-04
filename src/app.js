const express = require('express')
const app = express()
const path = require('path')

// motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// archivos estaticos
app.use(express.static(path.join(__dirname,'../public')));

app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));
app.use("/icons",express.static("./node_modules/bootstrap-icons"));

app.use((req,res)=>{
  res.sendFile(path.join(__dirname,'../public/html/404.html'));
});

app.use(express.urlencoded({extended: false}));

//servidor en escucha
app.listen(3000, () => {
    console.log('Servidor en espera')
  });