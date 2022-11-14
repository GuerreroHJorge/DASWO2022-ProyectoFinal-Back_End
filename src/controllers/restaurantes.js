const controllerRestaurantes = {
    lista: (req, res) => {
        res.send('Lista de restaurantes');
    },

    consultaPorCategoria: (req, res) => {
        const categoria = req.params.categoria;
        res.send('Lista de ' + categoria);
    },

    verificado: (req, res) => {
        const id = req.params.id;
        res.send('El restaurante con id:  ' + id + ' no esta verificado');
    },

    consultaPorId: (req, res) => {
        const id = req.params.id;
        res.send( id + '. Restaurante [nombre]');
    },

    nuevoRestaurante: (req, res) => {
        const nombre = req.params.nombre;
        const categoria = req.params.categoria;
        const descripcion = req.params.descripcion;
        res.send('Restaurante ' + nombre + ' agregado exitosamente');
    }

}


module.exports = controllerRestaurantes;
