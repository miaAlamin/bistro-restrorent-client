import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContex } from "../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCarts from "../Hooks/UseCarts";

const Header = () => {
  const { user, logOut } = useContext(authContex);
  const [cart] = UseCarts();

  const naboption = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/ourmenu">Our Menu</NavLink></li>
      <li><NavLink to="/order/salad">Order Food</NavLink></li>
      <li><NavLink to="/secret">Secret</NavLink></li>
      <li>
        <NavLink to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      {user ? (
        <>
          <button onClick={logOut} className="btn">Log Out</button>
        </>
      ) : (
        <li><NavLink to="login">Login</NavLink></li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 opacity-30 text-white max-w-screen-xl mx-auto bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {naboption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{naboption}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
