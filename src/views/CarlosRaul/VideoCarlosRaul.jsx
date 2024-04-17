import React from "react";

const VideoCarlosRaul = () => {
  return (
    <div id="video">
      <div className="bg-zinc-50 pt-10 pb-32">
        <div className="flex justify-center items-center">
          <video
          className="object-center w-2/3"
          autoPlay
          muted
          loop
          playsInline
          src="/static/video/MVI_3935.MP4"
        />          
        </div>
      </div>
    </div>
  );
};

export default VideoCarlosRaul;