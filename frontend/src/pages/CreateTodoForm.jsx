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
    try {
      await createTodo({
        title,
        description,
        status,
        dueDate,
      }).unwrap();
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create New Todo</h2>
      <form onSubmit={submitHandler} className="p-4 border rounded shadow-sm bg-light">
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="status" className="form-label">Status</label>
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
            <option value="Due">Due</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input
            type="date"
            id="dueDate"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create Todo"}
        </button>
      </form>
    </div>
  );
};

export default CreateTodoForm;