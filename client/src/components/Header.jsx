import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaShoppingCart } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";

function Header() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = async() => {
    await dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const handleClick = () => setClick(!click);

  if (!user) return null;  // Don't render navbar if user is not logged in

  return (
    <nav className="navbar bg-zinc-100 text-black dark:bg-black ">
      <div className="nav-container">
        <div className="nav-logo">
          <button onClick={onLogout} className="text-red-600 hover:text-orange-500 font-bold">
            Logout
          </button>

          <button onClick={() => navigate('/order')} className="ml-5 text-cyan-400 hover:text-red-500">
            <FaShoppingCart size={20} />
          </button>
        
        </div>

        <ul className={`${click ? "nav-menu active bg-zinc-50" : "nav-menu"}  dark:bg-black dark:text-yellow-300`}>
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
              <IoClose size={24} />
            </span>
          ) : (
            <span className="icon">
              <BsList size={24} />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
