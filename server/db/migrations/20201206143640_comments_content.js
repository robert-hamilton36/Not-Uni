exports.up = function (knex) {
    return knex.schema.createTable('comments_content', table => {
      table.increments('id')
      table.string('user_id')
      table.integer('module_id')
      table.text('content')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('comments_content')
  }