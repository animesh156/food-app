import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";


import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Order from "./components/Order";
import Payment from "./components/Payment";
import Header from './components/Header'


function App() {
 
  return (
    <>
      <Router>


     <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<Order />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="menu" element={<Menu />} />
          <Route path="payment" element={<Payment />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
