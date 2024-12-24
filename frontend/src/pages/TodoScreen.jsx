import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import TodoItem from '../components/TodoItem';
import axios from 'axios';

const TodoScreen = () => {

    const [todo, setTodos] = useState([]);
    const {id: todoId } = useParams();

    useEffect(() => {
      const fetchTodos = async () => {
        
        const {data} = await axios.get(`/api/todos/${todoId}`);
        setTodos(data);
      };
      fetchTodos(); 
    }, [todoId]);

  return (
    <>
       <Link to="/" className="btn btn-light my-3">
        Back
      </Link>
        <div className='container'>
          <h1>Todo Detail</h1>
          <div className='row'>
            <TodoItem todo={todo} />
          </div>
        </div>
    </>
  );
};

export default TodoScreen;