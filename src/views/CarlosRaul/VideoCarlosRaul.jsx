import React from "react";

const VideoCarlosRaul = () => {
  return (
    <div id="video" className="bg-zinc-50">
      <div className="bg-zinc-50 pt-10 pb-32">
        <div className="flex justify-center items-center">
          <video  type="video/mp4"
          className="object-center w-2/3"
          autoPlay
          loop
          playsInline
          controls 
          src="/static/video/MVI_3935.MP4"
        />          
        </div>
      </div>
    </div>
  );
};

export default VideoCarlosRaul;