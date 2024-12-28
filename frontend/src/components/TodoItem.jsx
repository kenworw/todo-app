function TodoItem({ todo }) {

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
      <h2 className="card-header">{todo.title}</h2>
      <p className="card-body">{todo.description}</p>

      <div className=" card-footer">
        Created on: {new Date(todo.createdAt).toLocaleDateString()}
      </div>
      
      <div className="card-footer" as="h3" style={{ backgroundColor: getStatusBackgroundColor(todo.status) }}>
          Status: {todo.status}
        </div>
        <div className="card-footer" as="h3">
          Will due on: {new Date(todo.createdAt).toLocaleDateString()}
        </div>
        <div className=" card-footer">
        Last updated on: {new Date(todo.updatedAt).toLocaleDateString()}
      </div>
    </div>
  );
}

export default TodoItem;
