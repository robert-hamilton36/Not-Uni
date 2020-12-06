exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('hash')
    table.string('user_name')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
