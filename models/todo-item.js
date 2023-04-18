const mongoose = require('mongoose'); // Import the mongoose module

const todoSchema = new mongoose.Schema({ // Define a new schema for the TodoItem model
    title: {
        type: String,
        required: true // The title field is required
    },
    description: {
        type: String,
        required: true // The description field is required
    },
    target_date: {
        type: Date,
        required: true // The target_date field is required
    }
});

const TodoItem = mongoose.model('TodoItem', todoSchema); // Create a new model using the schema

module.exports = TodoItem; // Export the TodoItem model for use in other parts of the application