var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('../models/User')
const User = require('../models/User')
const Todo = require('../models/Todo')
const privateKey = process.env.JWT_PRIVATE_KEY;


router.use(function(req, res, next) {
      if (req.header("Authorization")) {
          try {
              req.payload = jwt.verify(req.header("Authorization"), privateKey, { algorithms: ['RS256'] })
              console.log(req.payload)
          } catch(error) {
              return res.status(401).json({"error": error.message});
          }
      } else {
          return res.status(401).json({"error": "Unauthorized"});
      }
      next()
  })

  router.get('/', async function(req, res, next) {
    users.find({}, function(err, users) {
      res.status(201).json(users);  
    });
});

router.get('/:id', async function(req, res, next) {
    const user = new User(await users.findOne().where('_id').equals(req.params.id).exec())
    const todos = await Todo.find().where('user').equals(user.username).exec()
    return res.status(200).json({"username": user.username, "user_todos": todos})
});



module.exports = router;
