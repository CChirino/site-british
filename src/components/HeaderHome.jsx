import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 bg-neutral-500 z-50">
      <div className="flex justify-between items-center p-4">
        {isOpen && (
          <div className="flex">
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
              Ciudad Universitaria
            </Link>
            <Link
              to="/carlos-raul-villanueva"
              className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
            >
              Carlos Raul Villanueva
            </Link>
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 cursor-pointer"
                onClick={toggleSubMenu}
              >
                {isSubMenuOpen ? (
                  <polyline points="18 15 12 9 6 15" className="text-black"></polyline>
                ) : (
                  <polyline points="6 9 12 15 18 9" className="text-black"></polyline>
                )}
              </svg>
              {isSubMenuOpen && (
                <div className="absolute top-full left-0 bg-neutral-500 p-2 mt-2 rounded-md">
                  <Link to="/arquitectura" className="text-black block py-1">
                    Arquitectura
                  </Link>
                  <Link to="/arte" className="text-black block py-1">
                    Arte
                  </Link>
                  <Link to="/paisaje" className="text-black block py-1">
                    Paisaje
                  </Link>
                  <Link to="/principios" className="text-black block py-1">
                    Principios
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/sintesis-de-las-artes"
              className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
            >
              Sintesis de las Artes
            </Link>
            <Link
              to="/proyecto-eva"
              className="text-black hover:bg-gray-300 rounded hover:text-black text-lg mr-4"
            >
              Proyecto EVA
            </Link>
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 cursor-pointer ml-auto"
          onClick={toggleMenu}
        >
          <line x1="18" y1="12" x2="6" y2="12" className="text-black"></line>
          <line x1="18" y1="8" x2="6" y2="8" className="text-black"></line>
          <line x1="18" y1="16" x2="6" y2="16" className="text-black"></line>
        </svg>
      </div>
    </div>
  );
};

export default HeaderHome;