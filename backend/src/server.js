const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

//START SERVER
const server = express()

//MONGODB CONNECTION
mongoose.connect('mongodb+srv://rodrigo:88171754@cluster0.oqs4a.mongodb.net/tindev?retryWrites=true&w=majority',
   { useNewUrlParser: true, useUnifiedTopology: true })

//TELL SERVER TO USE JSON BODY
server.use(express.json())

//TELL SERVER TO BE FREE ACCESS
server.use(cors())

//TELL SERVER TO USE OUR ROUTES
server.use(routes)

//TELL SERVER TO USE 3333 PORT
server.listen(3333, () => console.log('❤ Server has been started'))