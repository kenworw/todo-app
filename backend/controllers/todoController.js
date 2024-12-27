import asyncHandler from '../middleware/asyncHandler.js';
import Todo from '../models/todoModel.js';

// Get all todos for the authenticated user
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user_id });
  res.json(todos);
});

// Get a single todo by ID for the authenticated user
const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.user_id });

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Create a new todo for the authenticated user
const createTodo = asyncHandler(async (req, res) => {
  const { title, description, status, dueDate } = req.body;

  if (!req.user_id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const todo = new Todo({
    title,
    user: req.user_id,
    description,
    status,
    dueDate,
  });

  try {
    const createdTodo = await todo.save();
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo", error });
  }
});

// Update a todo for the authenticated user
const updateTodo = asyncHandler(async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const todo = await Todo.findOne({ _id: req.params.id, user: req.user_id });

  if (todo) {
    todo.title = title;
    todo.description = description;
    todo.status = status;
    todo.dueDate = dueDate;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Delete a todo for the authenticated user
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id, user: req.user_id });

  if (todo) {
    await todo.deleteOne();
    res.json({ message: 'Todo removed' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };