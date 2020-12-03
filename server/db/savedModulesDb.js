const connection = require('./connection')

// id will come somewhere from auth/global state
function getSavedModules (id, db = connection) {
  return db('saved_modules')
    .join('modules', 'saved_modules.module_id', 'modules.id')
    .select('*')
    .where('saved_modules.user_id', id)
}
module.exports = {
  getSavedModules
}
