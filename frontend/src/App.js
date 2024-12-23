import Dashboard from "./components/layout/Dashboard";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="d-flex flex-column min-vh-100" >
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
