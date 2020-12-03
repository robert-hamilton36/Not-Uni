const express = require('express')
const router = express.Router()

const modulesDb = require('../db/modulesDb')

// GET /api/products
router.get('/', (req,res) => {
  modulesDb.getAllModules()
    .then(modules => {
      modules = modules.map(module => {
        return modulesDb.getModuleElements(module.id)
        .then(elements =>{
          module.elements = elements 
          return module
        })
      })
      return Promise.all(modules)
    })
    .then(modules => {
      res.json(modules)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something is broken' })
    })
})




module.exports = router