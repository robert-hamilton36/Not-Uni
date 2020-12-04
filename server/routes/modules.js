const { response } = require('express')
const express = require('express')
const router = express.Router()

const modulesDb = require('../db/modulesDb')
const savedModulesDb = require('../db/savedModulesDb')
const usersDb = require('../db/usersDb')

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

//  GET /api/modules/created
// shows modules created by logged-in user
router.get('/created', (req, res) => {
  const user_id = 10001
  return modulesDb.getModulesByUserId(user_id)
  .then( createdModules => {
    res.json(createdModules)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Something is broken' })
  })
})


//  GET /api/modules/saved
// shows the logged in person saved modules
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

// POST a saved module to the savedModulesDb
// saves a module to the users profile
router.post('/saved', (req, res) => {
  const newSave = req.body
  return savedModulesDb.addSavedModule(newSave)
  .then((whatever) => {
    res.json(whatever)
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
  
  return modulesDb.createModuleMeta(moduleMeta)
    .then(module_id => {
      moduleElements.map((item, i) => {
        item.module_id = module_id[0]
        item.order_num = i
      })

      moduleElements.map((element) => {
        return modulesDb.createModuleElement(element)
          .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something is broken' })
          })
      })
    })
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something is broken' })
    })
  
})

module.exports = router
