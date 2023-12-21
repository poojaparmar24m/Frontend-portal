import Admin from "./Components/Admin";
import AdminLogin from "./Components/AdminLogin";
import Customer from "./Components/Customer";
import Navbar from "./Components/Navbar";
import CreateContext from "./Context/CreateContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CreateContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Admin />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route path="/login" element={<AdminLogin />}></Route>
          </Routes>
        </Router>
      </CreateContext>
    </>
  );
}

export default App;
