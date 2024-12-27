import asyncHandler from "../middleware/asyncHandler.js";
import Todo from "../models/todoModel.js";

// @desc    Fetch all todos
// @route   GET /api/todos
// @access  Private

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});

// @desc    Fetch a todos
// @route   GET /api/todos/:id
// @access  Private

const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    return res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// @desc    Create a tod
// @route   POST /api/todos
// @access  Private

const createTodo = asyncHandler(async (req, res) => {
  const todos = new Todo({
    title: "Sample title",
    description: "Sample description",
    status: "Sample status",
    dueDate: new Date(),
  });
  const createdTodo = await todos.save();
  res.status(201).json(createdTodo);
});

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const { title, description, status } = req.body;
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.title = title;
    todo.description = description;
    todo.status = status;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo) {
    await todo.deleteOne({_id: todo._id});
    res.status(200).json({ message: "Todo removed" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});


export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };
