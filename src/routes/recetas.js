const router = require('express').Router();

const controller = require('./../controllers/recetas');

router.get('/recetas', controller.lista);

router.get('/recetas:categoria', controller.consultaPorCategoria);

router.get('/recetas/ingredientes', controller.listaIngredientes);

router.post('/recetas/nueva', controller.nuevaReceta);



module.exports = router;
