const express = require('express')
const path = require('path')

const moduleRoutes = require('./routes/modules')
const userRoutes = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(path.join('*', __dirname)))

server.use('/api/modules', moduleRoutes)
server.use('/api/users', userRoutes)

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
