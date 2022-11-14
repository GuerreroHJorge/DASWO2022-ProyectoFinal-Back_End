const router = require('express').Router();

const controller = require('./../controllers/usuarios');

router.get('/usuarios', controller.lista);

router.get('/usuarios:id', controller.consultaPorID);

router.get('/usuarios/isadmin:id', controller.consultaAdmin);

router.get('/usuarios/admins', controller.listaAdmins);

router.get('/usuarios/noadmins', controller.listaNoAdmins);

router.post('/usuarios/nuevo', controller.nuevoUsuario);



module.exports = router;