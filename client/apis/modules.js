import request from 'superagent'

export function getAllModulesAPI () {
  return request.get('/api/modules')
    .then(res => res.body)
}

export function getSavedModulesAPI (id) {
  return request.get(`/api/modules/saved/${id}`)
    .then(res => { return res.body })
}

export function createModuleAPI (module) {
  module.number_of_elements = module.elements.length
  console.log(module)
  return request.post('/api/modules').send(module)
    .then(res => res.body)
}

export function addSavedModuleAPI (userID, moduleID) {
  const module = {
    user_id: userID,
    module_id: moduleID
  }
  return request.post('/api/modules/saved')
    .send(module)
    .then(res => res.body)
}

export function removeSavedModuleAPI (savedModuleID) {
  return request.delete('/api/modules/saved/' + savedModuleID)
}

export function increaseLikesAPI (module) {
  const updatedModule = {
    id: module.id,
    title: module.title,
    user_id: module.user_id,
    category: module.category,
    duration: module.duration,
    description: module.description,
    number_of_elements: module.number_of_elements,
    likes: module.likes + 1
  }
  return request
    .patch('/api/modules/' + updatedModule.id)
    .send(updatedModule)
    .then(res => res.body)
}

export function decreaseLikesAPI (module) {
  console.log(module)
  const updatedModule = {
    id: module.id,
    title: module.title,
    user_id: module.user_id,
    category: module.category,
    duration: module.duration,
    description: module.description,
    number_of_elements: module.number_of_elements,
    likes: module.likes - 1
  }
  return request
    .patch('/api/modules/' + updatedModule.id)
    .send(updatedModule)
    .then(res => res.body)
}

// Create comment on a module

export function addCommentAPI (moduleID, comment) {
  console.log(moduleID)
  return request.post('/api/comments/' + moduleID).send(comment)
    .then(res => res.body)
}

// Get comments on a Module

export function displayCommentsAPi (id) {
  return request.get('/api/comments/' + id)
    .then(res => res.body)
}
