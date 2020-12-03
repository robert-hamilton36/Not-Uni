const connection = require('./connection')

function getAllModules (db = connection) {
  return db('modules')
    .select()
}

function getModuleElements (id, db = connection) {
  return db('module_elements')
    .where('module_id', id)
    .select()
}

function saveModuleMeta (moduleMeta, db = connection) {
  console.log("module meta: " + moduleMeta)
}

function saveModuleElements (moduleElements) {
  console.log("moduleElements: " + moduleElements)
}

module.exports = {
  getAllModules,
  getModuleElements,
  saveModuleMeta,
  saveModuleElements
}
