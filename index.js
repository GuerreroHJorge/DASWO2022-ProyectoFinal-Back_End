const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const rutasUsuarios = require('./src/routes/usuarios');
app.use('/', rutasUsuarios);

app.get('/', (req, res) => {
    res.send('api works');
});

app.listen(port, ()=> {
    console.log("App is running in port " + port);
});
