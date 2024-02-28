import React from "react";
import Header from "../components/Header";

const FirstView = () => {
  return (
    <div className="bg-neutral-500">
      <Header />
      <div className="flex flex-col items-center pt-5 pb-5">
        <div className="flex flex-col items-center pt-5 pb-5">
          <img
            src="/static/images/mockup EVA-67.png"
            alt="nubes"
            className="clouds w-1/2 sm:w-1/3 md:w-1/7 lg:w-1/8"
          />
        </div>
        <div className="flex flex-col items-center pt-3">
          <img
            src="/static/images/2-02.png"
            alt="descripcion"
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
      </div>
      <div className="flex flex-col items-end pt-5 pb-5">
        <img
          src="/static/images/mockup EVA-67.png"
          alt="nubes"
          className="w-1/6 sm:w-1/4 md:w-1/12 lg:w-1/8"
        />
      </div>
    </div>
  );
};

export default FirstView;