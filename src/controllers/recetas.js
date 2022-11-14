const controllerRecetas = {
    lista: (req, res) => {
        res.send('Lista de recetas');
    },

    listaIngredientes: (req, res) => {
        res.send('Lista de ingredientes de recetas');
    },

    nuevaReceta: (req, res) => {
        const nombre = req.params.nombre;
        const ingredientesPrincipales = req.params.ingredientes;
        const categoria = req.params.categoria;
        const procedimiento = req.params.procedimiento;
        res.send('La receta de ' + nombre + ' ha sido creada');
    },

    consultaPorCategoria: (req, res) => {
        const categoria = req.params.categoria;
        res.send('Lista de ' + categoria);
    }

}


module.exports = controllerRecetas;
