import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaShoppingCart } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";

function Header() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
         
<div className='nav-logo'>
<button  onClick={onLogout} className="text-red-600 font-bold" >
               Logout
            </button>

            <button onClick={() => navigate('/order')} className="ml-5 text-cyan-400"><FaShoppingCart /></button>
</div>



          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/menu"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <IoClose size={20} />
              </span>
            ) : (
              <span className="icon">
                <BsList size={20} />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
