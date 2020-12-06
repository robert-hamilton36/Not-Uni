const { response } = require('express')
const express = require('express')
const router = express.Router()

const commentsDB = require('../db/commentsDB')


//  GET /api/comments/created

  router.get('/', (req, res) => {
    commentsDB.getAllComments()
      .then(content => {
        content = content.map(comments => {
          return commentsDB.getCommentContent(comments.id)
            .then(elements => {
              comments.elements = elements
              return comments
            })
        })
        return Promise.all(content)
      })
      .then(modules => {
        res.json(modules)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Something is broken' })
      })
  })

  content.exports = router