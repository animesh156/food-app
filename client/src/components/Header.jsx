import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";

import { IoClose } from "react-icons/io5";
import { BsList } from "react-icons/bs";

function Header() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user} = useSelector(
    (state) => state.auth
  );

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar bg-zinc-100 text-black dark:bg-black ">
        <div className="nav-container">

          {user ? <div className='nav-logo'>
<button  onClick={onLogout} className="text-red-600 font-bold" >
               Logout
            </button>

            <button onClick={() => navigate('/order')} className="ml-5 text-cyan-400"><FaShoppingCart size={20}/></button>
            <button onClick={() => navigate('/')} className="ml-5 text-yellow-300"><IoMdRestaurant size={24}/></button>
</div> : <div className='nav-logo '>
<button  onClick={onLogout} className="text-red-600 font-bold hidden" >
               Logout
            </button>

            <button onClick={() => navigate('/order')} className="ml-5 text-cyan-400 hidden"><FaShoppingCart /></button>
            <button onClick={() => navigate('/')} className="ml-5 text-yellow-300"><IoMdRestaurant size={24} /></button>
</div> }
         




<ul className={`${click ? "nav-menu active bg-zinc-50" : "nav-menu"}  dark:bg-black dark:text-yellow-300`}>
            <li className="nav-item ">
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
            {user ? <li className="nav-item">
              
              <NavLink
                exact
                to="/menu"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li> : <li className="nav-item hidden">
              
              <NavLink
                exact
                to="/menu"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Menu
              </NavLink>
            </li> }
            
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
    </>
  );
}

export default Header;