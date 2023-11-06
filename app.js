require("dotenv").config()

const express = require('express') 
const cors  = require('cors') // le decimos a la app que use cors, esta es una libreria que me permite hacer peticiones remotas
const app = express()
const dbConnect = require('./Config/mongo')

app.use(cors());
app.use(express.json());
app.use(express.static("storage")); //Esto sirve indicarle a la app que use esta carpeta para visualizar los archivos cuando se haga una peticion

app.use('/api',require("./Routes"));

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})

dbConnect();