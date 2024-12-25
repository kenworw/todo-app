import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100" >
      <Navbar />
      <div className="container flex-grow-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
