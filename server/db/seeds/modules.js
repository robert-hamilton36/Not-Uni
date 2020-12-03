exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        { id: 101, title: 'Intro To JavaScript', user_id: 10001, category: 'JavaScript', duration: 15, description: 'Short Description Here', number_of_elements: 5 },
        { id: 102, title: 'Intro To C++', user_id: 10002, category: 'C++', duration: 15, description: 'Short Description Here', number_of_elements: 5 },
        { id: 103, title: 'Intro To C', user_id: 10003, category: 'C', duration: 15, description: 'Short Description Here', number_of_elements: 5 },
        { id: 104, title: 'Intro To Ruby', user_id: 10004, category: 'Ruby', duration: 15, description: 'Short Description Here', number_of_elements: 5 },
        { id: 105, title: 'Intro To Python', user_id: 10005, category: 'Python', duration: 15, description: 'Short Description Here', number_of_elements: 5 },
        { id: 106, title: 'JavaScript with React', user_id: 10001, category: 'JavaScript', duration: 15, description: 'Short Description Here', number_of_elements: 5 },
        { id: 107, title: 'JavaScript and Redux', user_id: 10001, category: 'JavaScript', duration: 15, description: 'Short Description Here', number_of_elements: 5 },
        { id: 108, title: 'How to do a Roundhouse Kick', user_id: 10001, category: 'JavaScript', duration: 15, description: 'Short Description Here', number_of_elements: 5 }
      ])
    })
}
