require("dotenv").config()

const express = require('express') 
const cors  = require('cors') // le decimos a la app que use cors, esta es una libreria que me permite hacer peticiones remotas
const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})