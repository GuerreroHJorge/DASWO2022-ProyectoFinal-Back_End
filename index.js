const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const rutasUsuarios = require('./src/routes/usuarios');
app.use('/', rutasUsuarios);
const rutasRecetas = require('./src/routes/recetas');
app.use('/', rutasRecetas);
const rutasRestaurantes = require('./src/routes/restaurantes');
app.use('/', rutasRestaurantes);
const rutasBusquedas = require('./src/routes/busquedas');
app.use('/', rutasBusquedas);


app.get('/', (req, res) => {
    res.send('api works');
});

app.listen(port, ()=> {
    console.log("App is running in port " + port);
});
