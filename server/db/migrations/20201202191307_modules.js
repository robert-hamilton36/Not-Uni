exports.up = function (knex) {
  return knex.schema.createTable('modules', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('user_id')
    table.string('category')
    table.integer('duration')
    table.integer('number_of_elements')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('modules')
}
