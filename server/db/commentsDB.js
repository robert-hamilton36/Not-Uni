const connection = require('./connection')

function displayComment (id, db = connection) {
  return db('comments_content')
    // .join('modules', 'comments_content.module_id', 'modules.id')
    .select()
    .where('comments_content.module_id', id)
}

// add a comment to a module
function addComment (newComment, db = connection) {
  return db('comments_content')
    .insert(newComment)
}

module.exports = {
  displayComment,
  addComment
}
