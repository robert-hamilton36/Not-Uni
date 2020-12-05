exports.up = function (knex) {
  return knex.schema.createTable('modules', table => {
    table.increments('id')
    table.string('title')
    table.integer('user_id')
    table.string('category')
    table.integer('duration')
    table.string('description')
    table.integer('number_of_elements')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('modules')
}
