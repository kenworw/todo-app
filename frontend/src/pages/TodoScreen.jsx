import { useParams, Link, useNavigate } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import Message from "../components/Message";
import {
  useGetTodoDetailsQuery,
  useDeleteTodoMutation,
} from "../features/todos/todosApiSlice";
import {toast } from "react-toastify";

const TodoScreen = () => {
  const { id: todoId } = useParams();
  const { data: todo, isLoading, error } = useGetTodoDetailsQuery(todoId);
  const [deleteTodo] = useDeleteTodoMutation();
  const navigate = useNavigate();

  
  const deleteTodoHandler = async () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      try {
        await deleteTodo(todo._id);
          
          toast.success("Todo deleted successfully");
        
        navigate("/");
        
      } catch (error) {
        toast.error("Failed to delete todo", error?.data?.message || error.error);
      }
    }
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Back
      </Link>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <Message variant="danger">{error.data.message || error.error}</Message>
      ) : (
        <div>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Detail</h3>
            </div>

            <div className="row">
              <TodoItem todo={todo} />
            </div>
          </div>
          <>
          Actions:
          
      <div className="col">
              <Link to={`/todo/${todo._id}/update`} className="btn btn-warning">
                Update
              </Link>
              <button
                className="btn btn-danger"
                onClick={deleteTodoHandler}
              >
                Delete
              </button>
              </div>
          </>
        </div>
      )}
    </>
  );
};

export default TodoScreen;
