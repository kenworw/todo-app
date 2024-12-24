import Todo from '../components/Todo';
import todos from '../todos';

const Dashboard = () => {
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