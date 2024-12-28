import Todo from "../components/Todo";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { useGetTodosQuery } from "../features/todos/todosApiSlice";

const Dashboard = () => {

  const { data: todos, isLoading, error} = useGetTodosQuery();
  
  return (
    <div className="container">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <Message variant="danger">{error.data.message || error.error}</Message>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h1>Todos</h1>
            
            
            

            <Link to={`/create`} className="btn btn-secondary">
                Create task
              </Link>

          </div>
          {todos.length === 0 ? (
              <Message variant="info">You don't set any todo yet</Message>
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
    </div>
  );
};

export default Dashboard;
