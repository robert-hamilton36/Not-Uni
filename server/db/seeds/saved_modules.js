exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('saved_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('saved_modules').insert([
        { id: 1, user_id: 10001, module_id: '101' },
        { id: 2, user_id: 10002, module_id: '102' },
        { id: 3, user_id: 10003, module_id: '103' },
        { id: 4, user_id: 10004, module_id: '104' },
        { id: 5, user_id: 10005, module_id: '105' }
      ])
    })
}
