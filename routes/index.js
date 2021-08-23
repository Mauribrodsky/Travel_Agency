import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaComentarios, 
    paginaDetalleViaje
} from '../controllers/paginasControllers.js';
import {
    guardarComentarios
} from '../controllers/comentariosControllers.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/comentarios', paginaComentarios);
router.post('/comentarios', guardarComentarios);

export default router;