const connection = require('./connection')

function getAllModules(db = connection) {
  return db('modules')
    .select()
}

function getModuleElements( id, db=connection){
  return db('module_elements')
    .where('module_id', id)
    .select()
}




module.exports = {
 getAllModules,
 getModuleElements
}