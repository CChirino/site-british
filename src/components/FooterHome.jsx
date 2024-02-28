import React from "react";

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
        </div>
        <div className="flex flex-1 justify-end">
          <img
            className="w-auto h-10 ml-2"
            src="/static/images/mockup EVA-67.png"
            alt="Nubes calder"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;