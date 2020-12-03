const express = require('express')
const path = require('path')

const productRoutes = require('./routes/products')
const orderRoutes = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(path.join('*', __dirname)))

server.use('/api/products', productRoutes)
server.use('/api/orders', orderRoutes)

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
