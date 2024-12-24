import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">Todo App</h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/"  className="nav-link" href="home.html"> Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" href="register.html"> Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" href="login.html"> Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
