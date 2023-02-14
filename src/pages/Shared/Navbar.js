import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/LOGO.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-primary px-6 lg:px-28 py-5 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="">
            <img src={logo} alt="logo" className=" w-36 h-12" />
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0`}
        >
          <ul className="lg:flex justify-end flex-1 items-center space-y-5 lg:space-y-0 lg:space-x-10 ">
            <li>
              <button className=" w-12 h-12 pl-[0.9rem] bg-secondary rounded-full text-white hover:text-secondary hover:bg-white">
                {/* <img
                  src={cart}
                  alt=""
                  className=" w-[21px] h-[21px] text-red-700"
                /> */}
                <svg
                  className="fill-current"
                  width="21"
                  height="21"
                  viewBox="0 0 27 27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 18V3H0.5V0.5H4.25C4.58152 0.5 4.89946 0.631696 5.13388 0.866116C5.3683 1.10054 5.5 1.41848 5.5 1.75V16.75H21.0475L23.5475 6.75H8V4.25H25.15C25.34 4.25001 25.5275 4.29333 25.6983 4.37667C25.869 4.46002 26.0185 4.58119 26.1354 4.73098C26.2523 4.88078 26.3335 5.05525 26.3729 5.24114C26.4122 5.42703 26.4087 5.61944 26.3625 5.80375L23.2375 18.3037C23.1698 18.5741 23.0137 18.814 22.794 18.9854C22.5743 19.1569 22.3037 19.25 22.025 19.25H4.25C3.91848 19.25 3.60054 19.1183 3.36612 18.8839C3.1317 18.6495 3 18.3315 3 18ZM5.5 26.75C4.83696 26.75 4.20107 26.4866 3.73223 26.0178C3.26339 25.5489 3 24.913 3 24.25C3 23.587 3.26339 22.9511 3.73223 22.4822C4.20107 22.0134 4.83696 21.75 5.5 21.75C6.16304 21.75 6.79893 22.0134 7.26777 22.4822C7.73661 22.9511 8 23.587 8 24.25C8 24.913 7.73661 25.5489 7.26777 26.0178C6.79893 26.4866 6.16304 26.75 5.5 26.75ZM20.5 26.75C19.837 26.75 19.2011 26.4866 18.7322 26.0178C18.2634 25.5489 18 24.913 18 24.25C18 23.587 18.2634 22.9511 18.7322 22.4822C19.2011 22.0134 19.837 21.75 20.5 21.75C21.163 21.75 21.7989 22.0134 22.2678 22.4822C22.7366 22.9511 23 23.587 23 24.25C23 24.913 22.7366 25.5489 22.2678 26.0178C21.7989 26.4866 21.163 26.75 20.5 26.75Z" />
                </svg>
              </button>
            </li>
            <li>
              <button className=" w-12 h-12 pl-[0.9rem] bg-secondary rounded-full text-white hover:text-secondary hover:bg-white">
                <svg
                  className="fill-current"
                  width="21"
                  height="21"
                  viewBox="0 0 20 27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 26.5C0 23.8478 1.05357 21.3043 2.92893 19.4289C4.8043 17.5536 7.34784 16.5 10 16.5C12.6522 16.5 15.1957 17.5536 17.0711 19.4289C18.9464 21.3043 20 23.8478 20 26.5H0ZM11.25 19.1038V24H17.0737C16.6269 22.7393 15.8515 21.6207 14.8277 20.7599C13.8039 19.8992 12.5688 19.3274 11.25 19.1038ZM8.75 24V19.1038C7.43125 19.3274 6.19614 19.8992 5.17231 20.7599C4.14849 21.6207 3.37309 22.7393 2.92625 24H8.75ZM10 15.25C5.85625 15.25 2.5 11.8938 2.5 7.75C2.5 3.60625 5.85625 0.25 10 0.25C14.1438 0.25 17.5 3.60625 17.5 7.75C17.5 11.8938 14.1438 15.25 10 15.25ZM10 12.75C12.7625 12.75 15 10.5125 15 7.75C15 4.9875 12.7625 2.75 10 2.75C7.2375 2.75 5 4.9875 5 7.75C5 10.5125 7.2375 12.75 10 12.75Z" />
                </svg>
              </button>
            </li>

            <li>
              <div className="relative">
                <button
                  className=" w-12 h-12 pl-[0.9rem] bg-secondary rounded-full text-white hover:text-secondary hover:bg-white"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <svg
                    className="fill-current"
                    width="21"
                    height="21"
                    viewBox="0 0 25 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24.25 18.5V21H1.75V18.5H24.25ZM6.245 0.880005L8.0125 2.6475L4.035 6.625L8.0125 10.6025L6.245 12.37L0.5 6.625L6.245 0.880005ZM24.25 9.75V12.25H13V9.75H24.25ZM24.25 1V3.5H13V1H24.25Z" />
                  </svg>
                </button>
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } absolute bg-primary py-2 rounded w-full lg:w-36 shadow-xl lg:right-0`}
                >
                  <Link className="block px-4 py-2 text-gray-800">
                    Option 1
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800">
                    Option 2
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800">
                    Option 3
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container shadow-lg mx-auto bg-white mt-[5rem]"></div>
    </>
  );
}

export default Navbar;
