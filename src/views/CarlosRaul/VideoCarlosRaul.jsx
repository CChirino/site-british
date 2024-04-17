import React from "react";

const VideoCarlosRaul = () => {
  return (
    <div id="video">
      <div className="bg-zinc-50 pt-10 pb-32">
        <div className="flex justify-center items-center">
          <video
          className="object-center w-2/3"
          autoPlay
          loop
          playsInline
          controls 
          src="/static/video/Entrevista Paulina Villanueva.mp4"
        />          
        </div>
      </div>
    </div>
  );
};

export default VideoCarlosRaul;