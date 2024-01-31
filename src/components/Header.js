import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black p-4">
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
          <Link to="/techstack" className="text-white">
            Tech-Stack
          </Link>
          <Link to="/login" className="text-white">
            SignIn
          </Link>
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
