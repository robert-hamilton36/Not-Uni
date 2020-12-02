exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        { id: 101, title: 'Intro To JavaScript', user_id: 10001, category: 'JavaScript', time: 15, number_of_elements: 4 },
        { id: 102, title: 'Intro To C++', user_id: 10002, category: 'C++', time: 15, number_of_elements: 4 },
        { id: 103, title: 'Intro To C', user_id: 10003, category: 'C', time: 15, number_of_elements: 4 },
        { id: 104, title: 'Intro To Ruby', user_id: 10004, category: 'Ruby', time: 15, number_of_elements: 4 },
        { id: 105, title: 'Intro To Python', user_id: 10005, category: 'Python', time: 15, number_of_elements: 4 }
      ])
    })
}
