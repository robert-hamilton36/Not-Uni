exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('module_elements').del()
    .then(function () {
      // Inserts seed entries
      return knex('module_elements').insert([
        { id: 900000, module_id: 101, type: 'heading', content: 'heading 1', order_num: 1 },
        { id: 900001, module_id: 101, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900002, module_id: 101, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900003, module_id: 101, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900004, module_id: 101, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900005, module_id: 102, type: 'heading', content: 'heading 1', order_num: 1 },
        { id: 900006, module_id: 102, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900007, module_id: 102, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900008, module_id: 102, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900009, module_id: 102, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900010, module_id: 103, type: 'heading', content: 'heading 1', order_num: 1 },
        { id: 900011, module_id: 103, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900012, module_id: 103, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900013, module_id: 103, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900014, module_id: 103, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900015, module_id: 104, type: 'heading', content: 'heading 1', order_num: 1 },
        { id: 900016, module_id: 104, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900017, module_id: 104, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900018, module_id: 104, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900019, module_id: 104, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900020, module_id: 105, type: 'heading', content: 'heading 1', order_num: 1 },
        { id: 900021, module_id: 105, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900022, module_id: 105, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900023, module_id: 105, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900024, module_id: 105, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900025, module_id: 106, type: 'heading', content: 'heading 1', order_num: 1 },
        { id: 900026, module_id: 106, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900027, module_id: 106, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900028, module_id: 106, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900029, module_id: 106, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900030, module_id: 107, type: 'heading', content: 'heading 1', order_num: 1 },
        { id: 900031, module_id: 107, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900032, module_id: 107, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 3 },
        { id: 900033, module_id: 107, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900034, module_id: 107, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900035, module_id: 108, type: 'heading', content: 'Step 1: Warm Up', order_num: 1 },
        { id: 900036, module_id: 108, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900037, module_id: 108, type: 'paragraph', content: 'kick', order_num: 3 },
        { id: 900038, module_id: 108, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900039, module_id: 108, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 },

        { id: 900035, module_id: 108, type: 'heading', content: 'Step 1: Warm Up', order_num: 1 },
        { id: 900036, module_id: 108, type: 'paragraph', content: 'lorum ispum belatio relatio conflatio', order_num: 2 },
        { id: 900037, module_id: 108, type: 'paragraph', content: 'kick', order_num: 3 },
        { id: 900038, module_id: 108, type: 'link', content: 'www.medium.com', order_num: 4 },
        { id: 900039, module_id: 108, type: 'video', content: 'https://www.youtube.com/embed/y1gaWl8EllQ', order_num: 5 }
      ])
    })
}
