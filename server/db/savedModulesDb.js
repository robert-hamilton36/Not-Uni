const connection = require('./connection')

// get all modules saved by a user
// id will come somewhere from auth/global state
function getSavedModules (id, db = connection) {
  return db('saved_modules')
    .join('modules', 'saved_modules.module_id', 'modules.id')
    .select('*')
    .where('saved_modules.user_id', id)
}

// add a module to a users saved modules
function addSavedModule (newSave, db = connection) {
  return db ('saved_modules')
  .insert(newSave)

}
module.exports = {
  getSavedModules,
  addSavedModule
}
