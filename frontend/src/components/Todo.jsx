const Todo = ({ todo }) => {
  return (
    <div className="card">
      <div className="card-body">
        <a href={`/todo/${todo._id}`}>
          <div className="card-body" as="div">
            <strong>{todo.title}</strong>
          </div>
        </a>

        <div className="card-footer" as="h3">
          Status: {todo.status}
        </div>
        <div className="card-footer" as="h3">
          Will due on: {todo.dueDate}
        </div>
        <div className="card-footer" as="h3">
          Created at: {todo.createdAt}
        </div>

       
      </div>
    </div>
  );
};

export default Todo;
