import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const handleDark = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const navLinks = (
    <>
      <li className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/allScholarship"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          All Scholarship
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/secret"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          secret
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/dashboard/myApplication"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 text-violet-600 border-b-2 border-violet-600"
              : "px-4 py-2 hover:bg-gray-200 rounded"
          }
        >
          DashBoard
        </NavLink>
      </li>
      <li>
        <label className="swap swap-rotate mr-2">
          <input type="checkbox" onChange={handleDark} />
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>
      </li>
    </>
  );

  const authLinks = (
    <>
      {
        user ?
          <>
            <NavLink
              onClick={handleLogOut}
              className={({ isActive }) =>
                isActive
                  ? "self-center px-8 py-3 rounded bg-violet-600 text-gray-50 hover:bg-violet-950"
                  : "self-center px-8 py-3 rounded hover:bg-gray-200"
              }
            >
              Log Out
            </NavLink>
          </> :
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "self-center px-8 py-3 rounded bg-violet-600 text-gray-50 hover:bg-violet-950"
                  : "self-center px-8 py-3 rounded hover:bg-gray-200"
              }
            >
              Log in
            </NavLink>
          </>
      }
      <Tooltip
        id="my-tooltip" />
      <img data-tooltip-id="my-tooltip"
        src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
        alt="User"
        className="w-10 h-10 rounded-full cursor-pointer mr-2"
        data-tooltip-content={user?.displayName}
      />
      {
        user ? null : (
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "self-center px-8 py-3 rounded bg-violet-600 text-gray-50 hover:bg-violet-950"
                : "self-center px-8 py-3 rounded hover:bg-gray-200"
            }
          >
            Register
          </NavLink>
        )
      }

    </>
  );

  return (
    <div>
      <header className="navbar z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
        <div className="container flex justify-between h-16 mx-auto">
          <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
            <img src="https://i.ibb.co/6nCdRVr/Screenshot-2024-06-01-043322.png" alt="Logo" className="h-16" />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {navLinks}
          </ul>

          <div className="items-center flex-shrink-0 hidden lg:flex space-x-3">
            {authLinks}
          </div>
          <button className="p-4 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="space-y-2">
              {navLinks}
            </ul>
            <div className="flex flex-col space-y-2 mt-4">
              {authLinks}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;


