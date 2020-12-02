exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 10001, hash: 'examplehash1', user_name: 'DeathEagle', email: 'example1@email.com' },
        { id: 10002, hash: 'examplehash2', user_name: 'foolishAssassin', email: 'example2@email.com' },
        { id: 10003, hash: 'examplehash3', user_name: 'Stretch', email: 'example3@email.com' },
        { id: 10004, hash: 'examplehash4', user_name: 'JagerBomb', email: 'example4@email.com' },
        { id: 10005, hash: 'examplehash5', user_name: 'BuddahChicken', email: 'example5@email.com' }
      ])
    })
}
