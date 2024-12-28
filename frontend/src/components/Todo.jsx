import { Link } from "react-router-dom";
const Todo = ({ todo }) => {

  const formattedDueDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(todo.dueDate));


  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case 'Not Started':
        return 'lightgray';
      case 'In Progress':
        return 'lightblue';
      case 'Completed':
        return 'lightgreen';
      case 'Archive':
        return 'lightcoral';
      default:
        return 'white';
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <Link to={`/todo/${todo._id}`}>
          <div className="card-body" as="div">
            <strong>{todo.title}</strong>
          </div>
        </Link>

        <div className="card-footer" as="h3" style={{ backgroundColor: getStatusBackgroundColor(todo.status) }}>
          Status: {todo.status}
        </div>
        <div className="card-footer" as="h3">
          Will due on: {formattedDueDate}
        </div>
       

       
      </div>
    </div>
  );
};

export default Todo;
