import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sticky top-0 bg-gray-200 z-50`}>
      <div className={`flex justify-between items-center p-4`}>
        <Link
          to="/"
          className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
        >
          Pagina Principal
        </Link>
        <Link
          to="/ciudad-universitaria"
          className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
        >
          La Ciudad Universitaria
        </Link>
        <Link
          to="/carlos-raul-villanueva"
          className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
        >
          Carlos Raul Villanueva
        </Link>
        <div className="relative">
          <Link
            to="/sintesis-de-las-artes"
            className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
          >
            Sintesis de las Artes
          </Link>
          {isOpen && (
            <div className="absolute top-full left-0 bg-gray-200 p-2 mt-2 rounded-md">
              <Link
                to="/arquitectura"
                className="text-black hover:text-gray-500 block py-1"
              >
                Arquitectura
              </Link>
              <Link
                to="/arte"
                className="text-black hover:text-gray-500 block py-1"
              >
                Arte
              </Link>
              <Link
                to="/paisaje"
                className="text-black hover:text-gray-500 block py-1"
              >
                Paisaje
              </Link>
              <Link
                to="/principios"
                className="text-black hover:text-gray-500 block py-1"
              >
                Principios
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/proyecto-eva"
          className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
        >
          Proyecto EVA
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 cursor-pointer`}
          onClick={toggleMenu}
        >
          <line x1="6" y1="12" x2="18" y2="12" className="text-black"></line>
          <line x1="6" y1="8" x2="18" y2="8" className="text-black"></line>
          <line x1="6" y1="16" x2="18" y2="16" className="text-black"></line>
        </svg>
      </div>
    </div>
  );
};

export default HeaderHome;