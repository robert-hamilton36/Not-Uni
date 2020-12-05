exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        { id: 101, title: 'Intro To JavaScript', user_id: 10001, category: 'JavaScript', duration: 15, description: 'The Perfect Place to Start Learning About JavaScript', number_of_elements: 5 },
        { id: 102, title: 'Intro To C++', user_id: 10002, category: 'C++', duration: 15, description: 'Learn the Basics of C++', number_of_elements: 5 },
        { id: 103, title: 'The Language of C', user_id: 10003, category: 'C', duration: 15, description: 'C How Easy It Is To Learn C!', number_of_elements: 5 },
        { id: 104, title: 'Intro To Ruby', user_id: 10004, category: 'Ruby', duration: 15, description: 'Ruby is a general-purpose language that is still popular and in high demand in the marketplace, as it’s more commonly used in Rails applications. Concise and readable, it is easy to pick up but also plenty powerful. Companies like Twitter, Soundcloud, Goodreads, and Kickstarter got their products off the ground with Ruby.', number_of_elements: 5 },
        { id: 105, title: 'Intro To Python', user_id: 10005, category: 'Python', duration: 15, description: 'Python - more than just a snake', number_of_elements: 5 },
        { id: 106, title: 'JavaScript with React', user_id: 10001, category: 'JavaScript', duration: 15, description: 'Start Using React Now!', number_of_elements: 5 },
        { id: 107, title: 'JavaScript and Redux', user_id: 10001, category: 'JavaScript', duration: 15, description: 'Some great introductory resources for anyone interested in Redux', number_of_elements: 5 },
        { id: 108, title: 'How to do a Roundhouse Kick', user_id: 10001, category: 'JavaScript', duration: 120, description: "Be the highlight of all your friend's parties", number_of_elements: 10 }
      ])
    })
}
