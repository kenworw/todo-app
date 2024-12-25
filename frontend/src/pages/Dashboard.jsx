import Todo from "../components/Todo";
import Message from "../components/Message";
import { useGetTodosQuery } from "../features/todos/todosApiSlice";

const Dashboard = () => {
  const { data: todos, isLoading, error } = useGetTodosQuery();

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <Message variant= "danger">{error.data.message || error.error}</Message>
      ) : (
        <>
          <h1>List of Todos</h1>
          <div className="row">
            {todos.map((todo) => (
              <div className="col-md-4" key={todo._id}>
                <Todo todo={todo} />
              </div>
            ))}
          </div>
          )
        </>
      )}
    </>
  );
};

export default Dashboard;
