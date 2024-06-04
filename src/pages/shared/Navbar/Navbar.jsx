import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

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


