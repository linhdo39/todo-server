const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  { 
    user : {type: String, required:true},
    title: {type: String, required: true},
    create_date: {type: String, required: false},
    description: {type: String, required: true},
    completed: {type: Boolean, required: false},
    completed_date: {type:String, required:false}
  }
);

//Export model
module.exports = mongoose.model('Todo', TodoSchema);
