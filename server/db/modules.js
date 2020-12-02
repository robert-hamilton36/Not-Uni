const e = require('express');
const connection = require('./connection')

function getAllModules(db = connection) {
  return db('modules').select()
}

module.exports = {
 getAllModules
}