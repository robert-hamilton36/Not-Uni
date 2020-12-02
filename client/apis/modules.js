import request from 'superagent'

const rootUrl = '/api/products'

export function getAllModulesAPI () {
  return request.get(rootUrl)
    .then(res => res.body)
}


// export function getModulesBySearchAPI () {
//   return request.get(rootUrl)
//     .then(res => res.body)
// }
