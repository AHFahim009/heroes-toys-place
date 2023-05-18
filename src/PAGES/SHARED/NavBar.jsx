import { Link } from "react-router-dom";

const NavBar = () => {
  // nav items variable
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">All Toys</Link>
      </li>

      <>
        <li>
          <Link to="/bookings">Add a Toys</Link>
        </li>
      </>
    </>
  );

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown  ">
          <label tabIndex={0} className="btn btn-ghost px-0 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl h-[54.78px] lg:px-0 "
        >
          Webpage logo
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className=" "> Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
