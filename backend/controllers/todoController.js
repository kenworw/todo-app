import asyncHandler from "../middleware/asyncHandler.js";
import Todo from "../models/todoModel.js";


// @desc    Fetch all todos
// @route   GET /api/todos
// @access  Private

const getTodos = asyncHandler(async(req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
});


// @desc    Fetch a todos
// @route   GET /api/todos/:id
// @access  Private

const getTodoById =asyncHandler(async(req, res) => {
    
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      return res.json(todo)
    } else{
    res.status(404).json({ message: "Todo not found" });
}})

export {getTodos, getTodoById}