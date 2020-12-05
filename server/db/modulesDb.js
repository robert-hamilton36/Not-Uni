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

module.exports = {
  getAllModules,
  getModuleElements,
  createModuleMeta,
  createModuleElement,
  getModulesByUserId
}
