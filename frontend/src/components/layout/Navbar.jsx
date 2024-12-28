import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {useLogoutMutation} from '../../features/user/userApiSlice';
import {logout} from '../../features/auth/authSlice';
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
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 ">
      <Link to="/" className="navbar-brand d-flex align-items-center ms-4">
        <img src={logo} alt="Todo App Logo" className="d-inline-block align-top" style={{ height: '40px', marginRight: '10px' }} />
        Todo App
      </Link>
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
            <Link to="/login" className="nav-link mx-2" onClick={logoutHandler}> logout</Link>
          </li>
        </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/register" className="nav-link" > Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link mx-2" > Login</Link>
          </li>
        </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
