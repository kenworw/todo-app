import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />
      <div className="container flex-grow-1 py-4">
        <div className="bg-white rounded-4 shadow-lg p-4 p-md-5">
          <Outlet />
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;