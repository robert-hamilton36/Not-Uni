exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('module_elements').del()
    .then(function () {
      // Inserts seed entries
      return knex('module_elements').insert([
        { id: 900001, module_id: 101, url: 'js url', text: 'lorum ispum belatio relatio conflatio', order_num: 1 },
        { id: 900002, module_id: 101, url: 'js url 2', text: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900003, module_id: 101, url: 'js url 3', text: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900004, module_id: 101, url: 'js url 4', text: 'lorum ispum belatio relatio conflatio', order_num: 4 },
        { id: 900005, module_id: 101, url: 'js url 5', text: 'lorum ispum belatio relatio conflatio', order_num: 5 },
        { id: 900006, module_id: 102, url: 'c++ url 1', text: 'lorum ispum belatio relatio conflatio', order_num: 1 },
        { id: 900007, module_id: 102, url: 'c++ url 2', text: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900008, module_id: 102, url: 'c++ url 3', text: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900009, module_id: 102, url: 'c++ url 4', text: 'lorum ispum belatio relatio conflatio', order_num: 4 },
        { id: 900010, module_id: 102, url: 'c++ url 5', text: 'lorum ispum belatio relatio conflatio', order_num: 5 },
        { id: 900011, module_id: 103, url: 'c url 1', text: 'lorum ispum belatio relatio conflatio', order_num: 1 },
        { id: 900012, module_id: 103, url: 'c url 2', text: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900013, module_id: 103, url: 'c url 3', text: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900014, module_id: 103, url: 'c url 4', text: 'lorum ispum belatio relatio conflatio', order_num: 4 },
        { id: 900015, module_id: 103, url: 'c url 5', text: 'lorum ispum belatio relatio conflatio', order_num: 5 },
        { id: 900016, module_id: 104, url: 'ruby url 1', text: 'lorum ispum belatio relatio conflatio', order_num: 1 },
        { id: 900017, module_id: 104, url: 'ruby url 2', text: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900018, module_id: 104, url: 'ruby url 3', text: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900019, module_id: 104, url: 'ruby url 4', text: 'lorum ispum belatio relatio conflatio', order_num: 4 },
        { id: 900020, module_id: 104, url: 'ruby url 5', text: 'lorum ispum belatio relatio conflatio', order_num: 5 },
        { id: 900021, module_id: 105, url: 'python url 1', text: 'lorum ispum belatio relatio conflatio', order_num: 1 },
        { id: 900022, module_id: 105, url: 'python url 2', text: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900023, module_id: 105, url: 'python url 3', text: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900024, module_id: 105, url: 'python url 4', text: 'lorum ispum belatio relatio conflatio', order_num: 4 },
        { id: 900025, module_id: 105, url: 'python url 5', text: 'lorum ispum belatio relatio conflatio', order_num: 5 },
        { id: 900026, module_id: 101, url: 'js url 6', text: 'lorum ispum belatio relatio conflatio', order_num: 6 },
        { id: 900027, module_id: 102, url: 'c++ url 6', text: 'lorum ispum belatio relatio conflatio', order_num: 6 },
        { id: 900028, module_id: 103, url: 'c url 6', text: 'lorum ispum belatio relatio conflatio', order_num: 6 },
        { id: 900029, module_id: 104, url: 'ruby url 6', text: 'lorum ispum belatio relatio conflatio', order_num: 6 },
        { id: 900030, module_id: 105, url: 'python url 6', text: 'lorum ispum belatio relatio conflatio', order_num: 6 }
      ])
    })
}
