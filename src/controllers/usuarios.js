const controllerUsuarios = {
    lista: (req, res) => {
        res.send('Lista de usuarios');
    },

    listaAdmins: (req, res) => {
        res.send('Lista de usuarios con permisos de Administrador');
    },

    listaNoAdmins: (req, res) => {
        res.send('Lista de usuarios sin permisos de Administrador');
    },

    consultaPorID: (req, res) => {
        const id = req.params.id;
        res.send('Encontramos id ' + id);
    },

    nuevoUsuario: (req, res) => {
        const nombre = req.params.nombre;
        const sexo = req.params.sexo;
        //const fechaNacimiento = req.params.fechaNacimiento;
        const correo = req.params.correo;
        const usuario = req.params.usuario;
        res.send('Se a creado el usuario ' + usuario + 'con correo ' + correo + 'a nombre de ' + nombre);
    },

    consultaAdmin: (req, res) => {
        const id = req.params.id;
        res.send('El usuario ' + id + ' No tiene permisos de administrador');
    }
}


module.exports = controllerUsuarios;