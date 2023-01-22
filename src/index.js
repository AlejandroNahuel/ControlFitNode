//Express
const express = require('express');

//Body Parser
const bodyParser = require('body-parser');

//Debug - Manda mensajes a la consola
const debug = require('debug')('app:server');

//Importando variables de entorno
const { Config } = require('./config');

const app = express();
const path = require('path');

//Para que el servidor entienda los datos
app.use(express.urlencoded({extended: false}));

//Si quiero que el servidor entienda los datos desde otro tipo de aplicaciones tipo SPA(Single Page Application), agregamos lo siguiente:
//app.use(express.json());

//Módulos
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(Config.port, () =>{
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});