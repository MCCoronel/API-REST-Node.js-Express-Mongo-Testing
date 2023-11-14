require('dotenv').config();

const morganBody = require('morgan-body');
const loggerStream = require('./utils/handlers/handle_logger');

const express = require('express');
const cors = require('cors'); // le decimos a la app que use cors, esta es una libreria que me permite hacer peticiones remotas
const app = express();
const dbConnect = require('./Config/mongo');

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

app.use('/api', require('./Routes'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

dbConnect();
