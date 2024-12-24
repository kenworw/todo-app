import { useEffect, useState } from 'react';
import Todo from '../components/Todo';
import axios from 'axios';

const Dashboard = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const {data} = await axios.get('/api/todos');
      setTodos(data);
    };
    fetchTodos();
  }, []);


  return (
    <>
      <h1>List of Todos</h1>
      <div className='row'>
        {todos.map((todo) => (
          <div className='col-md-4' key={todo._id}> 
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;