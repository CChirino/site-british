import React from "react";
import { Link } from "react-router-dom";

const FooterHome = () => {
  return (
    <footer className="bg-neutral-500">
      <div className="container mx-auto py-4 flex items-center">
        <div className="flex flex-1 items-center mr-5 ml-5">
          <img
            className="w-auto h-8 mr-2"
            src="/static/images/eva-logo.png"
            alt="Eva Logo"
          />
          <span className="font-rubik">Una Iniciativa de </span>
          <img
            className="w-1/4 h-10 mr-2"
            src="/static/images/mockup EVA-24.png"
            alt="Logo"
          />
            <Link to="/ciudad-universitaria/" className="h-1/6 w-1/6">
              <img src="/static/images/Iconos-69.png" alt="" />
            </Link>
            <Link to="/carlos-raul-villanueva" className="h-1/6 w-1/6">
              <img src="/static/images/Iconos-68.png" alt="" />
            </Link>
            <Link to="/sintesis-de-las-artes" className="h-1/6 w-1/6">
              <img src="/static/images/Iconos-67.png" alt="" />
            </Link>
            <Link to="/proyecto-eva" className="h-1/6 w-1/6">
              <img src="/static/images/Iconos-66.png" alt="" />
            </Link>
        </div>
        <div>
        </div>
        <div className="flex flex-1 justify-end">
          <p className="text-white pt-2 mr-1 ml-1">ES / EN </p>
          <Link to="/">
            <img
              className="w-auto h-10 ml-2"
              src="/static/images/mockup EVA-67.png"
              alt="Nubes calder"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;