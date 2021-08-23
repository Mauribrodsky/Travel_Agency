import { Comentario } from "../models/Comentarios.js";

const guardarComentarios = async (req, res) => {

    //Validar
    const {nombre, email, mensaje} = req.body;
    const errores = [];

    if(nombre === ""){
        errores.push({mensaje : "El nombre está vacío"});
    }
    if(email === ""){
        errores.push({mensaje : "El email está vacío"});
    }
    if(mensaje === ""){
        errores.push({mensaje : "El mensaje está vacío"});
    }
    if(errores.length > 0 ){

        //Consultar testimoniales existentes
        const comentarios = await Comentario.findAll();

        //Mostrar la vista con errores
        res.render('comentarios', {
            pagina: 'Comentarios',
            errores,
            nombre,
            email,
            mensaje,
            comentarios
        })
    }else{
        //Almacenarlo en la base de datos

        try {
            await Comentario.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/comentarios');
        } catch (error) {
            console.log(error);
        }

    }

}

export {
    guardarComentarios
}