import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            React-Redux-App
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/todos"
              className="hover:text-gray-300 transition duration-200"
            >
              Todos
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/counter"
              className="hover:text-gray-300 transition duration-200"
            >
              Counter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
