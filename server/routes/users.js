const express = require('express')
const router = express.Router()

const usersDb = require('../db/users')

// // // POST /api/orders
// // router.post('/', (req,res) => {
// //   const order = req.body
// //   ordersDb.createOrder(order)
// //     .then(order => {
// //       res.json(order)
// //     })
// //     .catch(err => {
// //       console.log(err)
// //       res.status(500).json({ message: 'Something is broken' })
// //     })
// // })

module.exports = router