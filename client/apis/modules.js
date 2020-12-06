import request from 'superagent'

export function getAllModulesAPI () {
  return request.get('/api/modules')
    .then(res => res.body)
}

// export function getModulesBySearchAPI () {
//   return request.get(rootUrl)
//     .then(res => res.body)
// }

export function getSavedModulesAPI () {
  return request.get('/api/modules/saved')
    .then(res => res.body)
}

export function createModuleAPI (module) {
  module.number_of_elements = module.elements.length
  

  return request.post('/api/modules').send(module)
    .then(res => res.body)
}

export function addSavedModuleAPI (user_id, module_id) {
  const module = {user_id: user_id, module_id: module_id}
  return request.post('/api/modules/saved').send(module)
    .then(res=>res.body)
}

// get created modules API?

// display all comments on a module

// export function displaydCommentAPI (content, user_id, module_id) {
//   const comment = {content: content, user_id: user_id, module_id:module_id}
//   return request.get('/api/co')
// }


// Write a post on a module