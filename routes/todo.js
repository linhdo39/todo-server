var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const Todo = require('../models/Todo')
const privateKey = process.env.JWT_PRIVATE_KEY;

router.get('/', async function(req, res, next) {
  const todos = await Todo.find()
  return res.status(200).json({"todos": todos})
});

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


router.get('/:id', async function(req, res, next) {
    const todo = await Todo.findOne().where('_id').equals(req.params.id).exec()
    return res.status(200).json(todo)
});

router.post('/', async function (req, res) {
  console.log(req.body)
  const todo = new Todo({
    "user" : req.body.user,
    "title": req.body.title,
    "create_date": new Date(Date.now()).toLocaleDateString('en-us'),
    "description": req.body.description,
    "completed": false,
    "completed_date": ""
    })

    await todo.save().then(savedTodo => {
        return res.status(201).json({
            "id": savedTodo._id,
            "user": savedTodo.user,
            "create_date": savedTodo.user,
            "description": savedTodo.description,
            "title": savedTodo.title,
            "completed": savedTodo.completed,
            "completed_date": savedTodo.completed_date
        })
    }).catch( error => {
        return res.status(500).json({"error": error.message})
    });
})


router.delete('/:id', async function(req, res, next) {
    const todo = await Todo.findOne().where('_id').equals(req.params.id).exec()
    try {
      Todo.deleteOne({ "_id" : todo._id}).exec()
    } catch(e){
      return res.status(500).json({"error": "Failed to delete"})
    }
      return res.status(200).json({"data": "Deleted"})
});


router.patch('/:id', async function(req, res, next) {
    const todo = await Todo.findOne().where('_id').equals(req.params.id).exec()
    todo.completed = !req.body.completed;
    todo.completed_date = req.body.completed_date
    await todo.save().then( savedTodo =>{
        return res.status(200).json(savedTodo)
    })
});

module.exports = router;
