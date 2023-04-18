const TodoItem = require('../models/todo-item');

/**
 * GET / - render home page with all todo items
 */
exports.home = async (req, res) => {
  try {
    // Retrieve all todo items from the database
    const todoItems = await TodoItem.find({});

    // Render home page template with retrieved todo items
    res.render('home', {
      title: "My Todo App",
      todo_items: todoItems
    });
  } catch (error) {
    // Log any errors to the console
    console.error(error);

    // Send an error response to the client
    res.status(500).send('An error occurred while fetching todo items');
  }
};

/**
 * POST /add - create a new todo item
 */
exports.add = async (req, res) => {
  try {
    // Create a new todo item with submitted data
    const newTodoItem = await TodoItem.create({
      title: req.body.title,
      description: req.body.description,
      target_date: req.body.date
    });

    // Redirect to home page after creating the new todo item
    res.redirect('/');
  } catch (error) {
    // Log any errors to the console
    console.error(error);

    // Send an error response to the client
    res.status(500).send('An error occurred while creating todo item');
  }
};

/**
 * GET /delete - delete a todo item with given id
 */
exports.delete = async (req, res) => {
  try {
    // Get the id of the todo item to be deleted from the request query parameters
    const itemId = req.query.id;

    // Find and delete the todo item with the given id
    await TodoItem.findByIdAndDelete(itemId);

    // Redirect to home page after deleting the todo item
    res.redirect('/');
  } catch (error) {
    // Log any errors to the console
    console.error(error);

    // Send an error response to the client
    res.status(500).send('An error occurred while deleting todo item');
  }
};