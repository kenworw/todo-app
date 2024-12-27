import Todo from "../components/Todo";
import Message from "../components/Message";
import { useGetTodosQuery, useCreateTodoMutation } from "../features/todos/todosApiSlice";
import {toast} from "react-toastify";

const Dashboard = () => {
  const { data: todos, isLoading, error, refetch } = useGetTodosQuery();

  const [createTodo, {isLoading: loadingCreate}] = useCreateTodoMutation();



  const crateTodoHandler = async () => {
    if (window.confirm("Are you sue you want to create a new todo?")) {
      try {
        await createTodo();
        refetch();
      } catch (error) {
        toast.error("Failed to create todo", error?.data?.message || error.error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <Message variant="danger">{error.data.message || error.error}</Message>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h1>Todos</h1>
            
            
            <button
              className="btn-sm m-3"
              onClick={crateTodoHandler}
              disabled={loadingCreate}
            >
              Create Todo
            </button>
          </div>
          {todos.length === 0 ? (
              <Message variant="info">You don't set any todo yet!</Message>
            ) : null}
          <div className="row">
            {todos.map((todo) => (
              <div className="col-md-4" key={todo._id}>
                <Todo todo={todo} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
