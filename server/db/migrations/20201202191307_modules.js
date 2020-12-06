exports.up = function (knex) {
  return knex.schema.createTable('modules', table => {
    table.increments('id')
    table.text('title')
    table.integer('user_id')
    table.text('category')
    table.integer('duration')
    table.text('description')
    table.integer('number_of_elements')
    table.integer('likes')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('modules')
}
