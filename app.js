require('dotenv').config();

const morganBody = require('morgan-body');
const loggerStream = require('./utils/handlers/handle_logger');
const swaggerUI = require('swagger-ui-express');
const openApiConfiguratiion = require('./doc/swagger');
const express = require('express');
const cors = require('cors'); // le decimos a la app que use cors, esta es una libreria que me permite hacer peticiones remotas
const app = express();
const dbConnect = require('./Config/mongo');
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());
app.use(express.static('storage')); //Esto sirve indicarle a la app que use esta carpeta para visualizar los archivos cuando se haga una peticion

morganBody(app, {
  noColors: true, // para que no me muestre los colores
  stream: loggerStream, // para que me escriba en el logger
  skip: function (req, res) {
    // para que me salte la peticion
    return res.statusCode < 400;
  },
});

/**
 * Definir ruta de documentacion => localhost:3001/documentation
 */
app.use(
  '/documentation',
  swaggerUI.serve,
  swaggerUI.setup(openApiConfiguratiion)
);
/**
 * Aqui invocamos las Rutas
 */

app.use('/api', require('./Routes'));

const port = process.env.PORT || 3000;

if (NODE_ENV !== 'test') {  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

dbConnect();

module.exports = app;
