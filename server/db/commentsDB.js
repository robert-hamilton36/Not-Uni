const connection = require('./connection')

// connect a comment to a module
// add a comment to a module
// Have user name with the comment


// STREACH

// Users can like a comment
// users can update their comment 
// users can delete a comment

// Add a comment

function displayComment (id, db = connection) {
  return db('comments_content')
    .join('modules', 'comments_content.module_id', 'modules.id')
    .select('*')
    .where('comments_content.module_id', id)
}

// add a comment to a module
function addComment (newComment, db = connection) {
  return db ('comments_content')
  .insert(newComment)
}

module.exports = {
  displayComment,
  addComment
}
