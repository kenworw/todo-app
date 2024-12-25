import { useParams, Link } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { useGetTodoDetailsQuery } from "../features/todos/todosApiSlice";

const TodoScreen = () => {
  
  const { id: todoId } = useParams();
  const { data: todo, isLoading, error } = useGetTodoDetailsQuery(todoId);


  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Back
      </Link>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>{error.data.message || error.error}</div>
      ) : (
        <div>
          <div className="container">
            <h1>Todo Detail</h1>
            <div className="row">
              <TodoItem todo={todo} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoScreen;
