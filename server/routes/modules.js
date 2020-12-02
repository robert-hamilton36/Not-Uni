const express = require('express')
const router = express.Router()

const modulesDb = require('../db/modules')

// GET /api/products
router.get('/', (req,res) => {
  modulesDb.getAllModules()
    .then(modules => {
      res.json(modules)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something is broken' })
    })
})

module.exports = router