import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Comentario = db.define('comentarios', {
    nombre:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    },
});