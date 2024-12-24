import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Todo from "../models/todoModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const todos = await Todo.find({});
    res.json(todos);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.json(todo);
    }
    res.status(404).json({ message: "Todo not found" });
  })
);

export default router;
