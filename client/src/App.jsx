import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Order from './components/Order'
import Payment from "./components/Payment";


function App() {

  

  return (
    <>
      <Router>
        
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="order" element={<Order />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="menu" element={<Menu />} />
              <Route path="payment" element={<Payment  />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
