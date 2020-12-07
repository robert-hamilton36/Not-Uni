import request from 'superagent'

export function getAllModulesAPI () {
  return request.get('/api/modules')
    .then(res => res.body)
}


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