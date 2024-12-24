import { useParams, Link } from 'react-router-dom';
import TodoItem from '../components/TodoItem';
import todos from '../todos';

const TodoScreen = () => {
    const {id: todoId } = useParams();
    const todo = todos.find((todo) => todo._id === todoId);

  return (
    <>
       <Link to="/" className="btn btn-light my-3">
        Back
      </Link>
        <>
          <h1>Todo Detail</h1>
          <div className='row'>
            <TodoItem todo={todo} />
          </div>
        </>
    </>
  );
};

export default TodoScreen;