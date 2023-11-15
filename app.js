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

/**
 * Si el entorno es dif a test entonces que si inicie la app, si invoque el puerto, porque a lo largo de la prueba,puede que tengamos un error, del supertest, ya que lo que hace es instanciar, va a levantar una app al momneto de que hace la app, y cuando dejamos que haga eso sin una bandera o un limite por asi decirlo, vamos a obtener un error en la consola que el puerto 3001 ya esta siendo usado,de esta forma evitamos que cuando se ejecuten pruebas no se levante la aplicacion ya que eso lo hace automaticamente supertest, en packageJson ponemos "test": "cross-env NODE_ENV=test jest" en scripts
 */
if (NODE_ENV !== 'test') {  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

dbConnect();

module.exports = app;
