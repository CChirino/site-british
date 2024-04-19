import React from "react";

const VideoCarlosRaul = () => {
  return (
    <div id="video" className="bg-zinc-50">
      <div className="bg-zinc-50 pt-10 pb-32">
        <div className="bg-zinc-50 flex justify-center items-center">
          <iframe
            src="https://player.vimeo.com/video/936827197?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="900"
            height="600"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Entrevista Paulina Villanueva"
            autoPlay
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoCarlosRaul;