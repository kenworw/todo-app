import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        background: 'linear-gradient(135deg,rgb(94, 94, 9),rgb(49, 49, 44))', // Example gradient
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <div className="container flex-grow-1 my-4">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;