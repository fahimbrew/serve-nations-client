import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-base font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="text-base font-medium">
          Services
        </NavLink>
      </li>
    </>
  );

  const dashboardLinks = (
    <>
      <li>
        <NavLink to="/add-service">Add Service</NavLink>
      </li>
      <li>
        <NavLink to="/manage-services">Manage Service</NavLink>
      </li>
      <li>
        <NavLink to="/booked">Booked Services</NavLink>
      </li>
      <li>
        <NavLink to="/service-todo">Service To-Do</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Mobile Dropdown - Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              {user && dashboardLinks}
              {!user && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {user && (
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              )}
            </ul>
          </div>

          {/* Brand Logo */}
          <Link to="/" className="text-xl font-bold ml-2">
            Serve Nations
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">{navLinks}</ul>
        </div>

        {/* Right - Auth Area */}
        <div className="navbar-end gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Dashboard Dropdown (only on lg) */}
              <div className="dropdown hidden lg:block">
                <label tabIndex={0} className="btn btn-sm btn-outline">
                  Dashboard
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {dashboardLinks}
                </ul>
              </div>

              {/* Display name and avatar */}
              <div className="hidden md:block font-medium">
                {user.displayName}
              </div>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-3xl" />
              )}
              <button onClick={handleLogOut} className="btn btn-sm btn-outline">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm bg-lime-600 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
