exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('comments_content').del()
      .then(function () {
        // Inserts seed entries
        return knex('comments_content').insert([
          { id: 1, user_id: 10001, module_id: '101', content: 'This is a comment, I like this exerize'},
          { id: 2, user_id: 10002, module_id: '102', content: 'This is a comment, I like this exerize'},
          { id: 3, user_id: 10003, module_id: '103', content: 'This is a comment, I like this exerize'},
          { id: 4, user_id: 10004, module_id: '104', content: 'This is a comment, I like this exerize'},
          { id: 5, user_id: 10005, module_id: '105', content: 'This is a comment, I like this exerize'},
          { id: 6, user_id: 10001, module_id: '108', content: 'This is a comment, I like this exerize'},
  
        ])
      })
  }
