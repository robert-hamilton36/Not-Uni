const express = require('express')
const path = require('path')

const moduleRoutes = require('./routes/modules')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(path.join('*', __dirname)))

server.use('/api/modules', moduleRoutes)


server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
