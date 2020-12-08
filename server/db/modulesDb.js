const connection = require('./connection')

// function getAllModules (db = connection) {
//   return db('modules')
//     .select()
// }

function getAllModules(db = connection) {
  return db('modules').select()
    .then(modules => Promise.all(modules.map(module => {
      return db('comments_content').where('module_id', module.id)
        .then(comments => {
          module.comments = comments
          return module
        })
    })))
}

function getModuleElements (id, db = connection) {
  return db('module_elements')
    .where('module_id', id)
    .select()
}

function createModuleMeta (moduleMeta, db = connection) {
  return db('modules').insert(moduleMeta)
}

function createModuleElement (element, db = connection) {
  return db('module_elements').insert(element)
}

function getModulesByUserId (user_id, db = connection) {
  return db('modules')
  .where('user_id', user_id)
  .select()
}


function updateModule (id, updatedModule, db = connection){
  return db('modules').update(updatedModule).where('id', id)
}

function deleteModule (id, db = connection){
  return db('modules')
  .where('id', id)
  .then (()=> {
    return db('modules')
    .where('id', id)
    .del()
  })
}

module.exports = {
  getAllModules,
  getModuleElements,
  createModuleMeta,
  createModuleElement,
  getModulesByUserId,
  updateModule,
  deleteModule
}
