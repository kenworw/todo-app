import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTodoMutation } from "../features/todos/todosApiSlice";
import { toast } from "react-toastify";

const CreateTodoForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [createTodo, { isLoading: isCreating }] = useCreateTodoMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      status,
      dueDate,
    };
    try {
      await createTodo(newTodo).unwrap();
      toast.success("Todo created successfully");
      setTitle("");
      setDescription("");
      setStatus("");
      setDueDate("");
      navigate("/");
    } catch (err) {
      toast.error("Failed to create todo");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isCreating}>
        {isCreating ? "Creating..." : "Create Todo"}
      </button>
    </form>
  );
};

export default CreateTodoForm;
