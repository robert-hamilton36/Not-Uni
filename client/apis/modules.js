import request from 'superagent'

export function getAllModulesAPI () {
  return request.get('/api/modules')
    .then(res => res.body)
}


export function getSavedModulesAPI (id) {
  return request.get(`/api/modules/saved/${id}`)
  // .query({id:id})
  .then(res => { 
    return res.body })
}

export function createModuleAPI (module) {
  module.number_of_elements = module.elements.length
  console.log(module);
  return request.post('/api/modules').send(module)
    .then(res => res.body)
}

export function updateModuleAPI (updatedModule) {

  updatedModule.number_of_elements = updatedModule.elements.length

  const id = updatedModule.id

  return request.patch('/api/modules/' + id ).send(updatedModule)
    .then(res => res.body)
}

export function addSavedModuleAPI (user_id, module_id) {
  const module = {user_id: user_id, module_id: module_id}
  return request.post('/api/modules/saved').send(module)
    .then(res=>res.body)
}


export function increaseLikesAPI(module){
  let updatedModule ={
    id: module.id,
    title:module.title,
    user_id:module.user_id,
    category:module.category,
    duration:module.duration,
    description:module.description,
    number_of_elements:module.number_of_elements,
    likes: module.likes + 1
  }
  return request
  .patch('/api/modules/' + updatedModule.id)
  .send(updatedModule)
  .then (res => res.body)
}



export function decreaseLikesAPI(module){
  console.log(module)
  let updatedModule ={
    id: module.id,
    title:module.title,
    user_id:module.user_id,
    category:module.category,
    duration:module.duration,
    description:module.description,
    number_of_elements:module.number_of_elements,
    likes: module.likes -1
  }
  return request
  .patch('/api/modules/' + updatedModule.id)
  .send(updatedModule)
  .then (res => res.body)
}


// get created modules API?



// Create comment on a module

export function addCommentAPI (moduleID, comment) {
  console.log(moduleID);
  return request.post('/api/comments/' + moduleID).send(comment)
    .then(res => res.body)
}

// Get comments on a Module

export function displayCommentsAPi(id){;
  return request.get('/api/comments/' + id)
    .then(res => res.body)
  }

