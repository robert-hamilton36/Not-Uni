const express = require('express')
const router = express.Router()

const modulesDb = require('../db/modulesDb')
const savedModulesDb = require('../db/savedModulesDb')

// GET /api/modules
router.get('/', (req, res) => {
  modulesDb.getAllModules()
    .then(modules => {
      modules = modules.map(module => {
        return modulesDb.getModuleElements(module.id)
          .then(elements => {
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

router.get('/saved', (req, res) => {
  const id = 10001 // hard coded for now
  return savedModulesDb.getSavedModules(id)
    .then(savedModules => {
      res.json(savedModules)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something is broken' })
    })
})

// CREATE A MODULE
router.post('/', (req, res) => {
  let { title, user_id, category, duration, number_of_elements, elements} = req.body

  let moduleMeta = {
    title, 
    user_id, 
    category, 
    duration, 
    number_of_elements
  }

  let moduleElements = [...elements]
  
  console.log("Meta: ");
  console.log(moduleMeta)

  console.log("Elements: ");
  console.log(moduleElements)

})

module.exports = router
