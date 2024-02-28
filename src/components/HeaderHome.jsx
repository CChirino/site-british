import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 z-40 w-screen h-screen opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 z-50 h-screen bg-transparent transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {isOpen && (
          <nav className="flex mt-6 mr-24">
            <Link
              to="/"
              className="px-5 text-black hover:bg-gray-200 rounded hover:text-black text-lg	"
            >
              Pagina Principal
            </Link>
            <Link
              to="/ciudad-universitaria"
              className="px-5 text-black hover:bg-gray-200 rounded hover:text-black text-lg	"
            >
              La Ciudad Universitaria
            </Link>
            <Link
              to="/carlos-raul-villanueva"
              className="px-5 text-black hover:bg-gray-200 rounded hover:text-black text-lg	"
            >
              Carlos Raul Villanueva
            </Link>
            <Link
              to="/sintesis-de-las-artes"
              className="px-5 text-black hover:bg-gray-200 rounded hover:text-black text-lg	"
            >
              Sintesis de las Artes
            </Link>
            <Link
              to="/proyecto-eva"
              className="px-5 text-black hover:bg-gray-200 rounded hover:text-black text-lg	"
            >
              Proyecto EVA
            </Link>
          </nav>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute top-4 right-4 z-50 w-10 h-10 cursor-pointer`}
        onClick={toggleMenu}
      >
        <line x1="6" y1="12" x2="18" y2="12" className="text-black"></line>
        <line x1="6" y1="8" x2="18" y2="8" className="text-black"></line>
        <line x1="6" y1="16" x2="18" y2="16" className="text-black"></line>
      </svg>
    </div>
  );
};

export default HeaderHome;