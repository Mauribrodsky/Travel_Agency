import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv'

const app = express();

dotenv.config({path:"variables.env"});

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));


//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir public folder
app.use(express.static('public'));

//Agregar router
app.use('/', router);

//**Puerto y host para la app **
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;


app.listen(port, host, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
});