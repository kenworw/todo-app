import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../features/user/userApiSlice';
import { logout } from '../../features/auth/authSlice';
import logo from '../../assets/brand.png';

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error('Failed to logout', err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <Link to="/" className="navbar-brand d-flex align-items-center ms-4">
        <img src={logo} alt="Todo App Logo" className="d-inline-block align-top" style={{ height: '40px', marginRight: '10px' }} />
        Todo App
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {userInfo ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-link">
              {userInfo.name}
            </li>
            <li className="nav-item mx-2">
              <Link to="/login" className="nav-link" onClick={logoutHandler}>Logout</Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;