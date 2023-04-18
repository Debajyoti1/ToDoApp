const mongoose = require('mongoose')

const todoSchema=new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    target_date : {
        type: Date,
        required : true
    }
})

const TodoItem = mongoose.model('TodoItem',todoSchema)

module.exports=TodoItem