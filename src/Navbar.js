import React from "react";
import KevinK from "./images/k.png";

const TitleItem = ({ title }) => {
  return (
    <div className="navbar-item">
      <a
        href="/"
        className="text-black hover:text-gray-500 px-2 py-2 rounded-md text-sm font-medium"
      >
        {title}
      </a>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/*
        Heroicon name: outline/menu

        Menu open: "hidden", Menu closed: "block"
      */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/*
        Heroicon name: outline/x

        Menu open: "block", Menu closed: "hidden"
      */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center items-stretch justify-start md:justify-between  ">
            <div className="flex-shrink-0 flex items-center transform hover:scale-125 transition duration-300 ease-in-out">
              <a href="/">
                <img
                  className="block lg:hidden h-8 w-auto "
                  src={KevinK}
                  alt="Workflow"
                />
              </a>
              <a href="/">
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={KevinK}
                  alt="Workflow"
                />
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 ">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <TitleItem href="/" title="Home" />
                <TitleItem href="/" title="About Me" />
                <TitleItem href="/" title="Applications" />
                <TitleItem href="/" title="Skills" />
                <TitleItem href="/" title="Contact Me" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
Mobile menu, toggle classes based on menu state.

Menu open: "block", Menu closed: "hidden"
*/}
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About Me
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Applications
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>{" "}
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
