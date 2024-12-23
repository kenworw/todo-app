import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
      <h1 className="navbar-brand">Todo App</h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a  className="nav-link" href="home.html"> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="register.html"> Registration</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html"> Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
