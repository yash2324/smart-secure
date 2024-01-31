import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          SmartSecure
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-white ">
            Home
          </Link>
          <Link to="/aboutUs" className="text-white ">
            About Us
          </Link>
          <Link to="/reports" className="text-white ">
            Reports
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
