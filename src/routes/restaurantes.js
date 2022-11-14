const router = require('express').Router();

const controller = require('./../controllers/restaurantes');

router.get('/restaurantes', controller.lista);

router.get('/restaurantes/categoria:categoria', controller.consultaPorCategoria);

router.get('/restaurantes/id:id', controller.consultaPorId);

router.get('/restaurantes/verificado:id', controller.verificado);

router.post('/restaurantes/nuevo', controller.nuevoRestaurante);



module.exports = router;
