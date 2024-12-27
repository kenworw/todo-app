import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import {
  useGetTodoDetailsQuery,
  useUpdateTodoMutation,
} from "../features/todos/todosApiSlice";

const UpdateTodoForm = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");

  const navigate = useNavigate();

  const {
    data: todo,
    isLoading,
    refetch,
    error,
  } = useGetTodoDetailsQuery(id);

  const [updateTodo, { isLoading: loadingUpdate }] = useUpdateTodoMutation();

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setStatus(todo.status);
      setDueDate(todo.dueDate);
    }
  }, [todo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedTodo = {
      id,
      title,
      description,
      status,
      dueDate,
    };
    const result = await updateTodo(updatedTodo);
    if (result.error) {
      toast.error("Failed to update todo");
    } else {
      toast.success("Todo updated successfully");
      navigate("/");
      refetch();
    }
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Todo</h1>
        {loadingUpdate && <h1>Loading</h1>}

        {isLoading ? (
          <h1>Loading</h1>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title of todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <>
                <textarea
                  class="form-control"
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </>
            </Form.Group>

            <Form.Group controlId="dueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter due date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div className='form-group'>
        <label htmlFor='status'>Status</label>
        <select
          id='status'
          className='form-control'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value=''>Select Status</option>
          <option value='Not Started'>Not Started</option>
          <option value='In Progress'>In Progress</option>
          <option value='Completed'>Completed</option>
          <option value='Archive'>Due</option>
        </select>
      </div>

            <Button
              type="submit"
              variant="primary"
              style={{ marginTop: "1rem" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UpdateTodoForm;
