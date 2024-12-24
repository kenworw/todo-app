function TodoItem({ todo }) {
  return (
    <div className="card">
      <h2 className="card-header">{todo.title}</h2>
      <p className="card-body">{todo.description}</p>

      <div className=" card-footer">
        Created on: {new Date(todo.createdAt).toLocaleDateString()}
      </div>
      <div className="card-footer" as="h3">
          Status: {todo.status}
        </div>
        <div className="card-footer" as="h3">
          Will due on: {todo.dueDate}
        </div>
    </div>
  );
}

export default TodoItem;
