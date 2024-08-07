import JWPlayer from "@jwplayer/jwplayer-react";
import { channelDetail } from "../types";
import { usePlayerConfig } from "../hooks/usePlayerConfig";

type videoJwplayerType = {
  channel: channelDetail;
};

function videoJwplayer({ channel }: videoJwplayerType) {


  const config = {
    key: "XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo",
    stretching: "exactfit",
    width: "100%",
    heigth: "100%",
    aspectratio: "16:9",
    autostart: true,
    cast: {},
    sharing: {},
  };

  const playlist = usePlayerConfig(channel);

  return (
    <JWPlayer
      library="https://ssl.p.jwpcdn.com/player/v/8.22.0/jwplayer.js"
        file="https://www.youtube.com/watch?v=lKDGxAHZt0E"
      playlist={playlist}
      config={config}
    />
  );
}

export default videoJwplayer;
