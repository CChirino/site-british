import React from "react";

const VideoCarlosRaul = () => {
  return (
    <div id="video" className="bg-zinc-50">
      <div className="bg-zinc-50 pt-10 pb-32">
        <div className="flex justify-center items-center">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/936827197?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Entrevista Paulina Villanueva"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  );
};

export default VideoCarlosRaul;