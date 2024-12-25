import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {useLogoutMutation} from '../../features/user/userApiSlice';
import {logout} from '../../features/auth/authSlice';

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
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">Todo App</h1>
      <div className="collapse navbar-collapse">
        {userInfo ? ( 
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/"  className="nav-link" > Home</Link>
          </li>
          <li className="nav-link">
            {userInfo.name}
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={logoutHandler}> logout</Link>
          </li>
        </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/register" className="nav-link" > Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" > Login</Link>
          </li>
        </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
