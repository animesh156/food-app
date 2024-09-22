import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";
import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";

 function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} className="h-11" alt="Logo" />
          </NavLink>

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

export default Header