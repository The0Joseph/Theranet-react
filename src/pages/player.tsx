import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getChannelData } from "../services/api";

declare global {
  interface Window {
    jwplayer: any; 
  }
}

function PlayerPage() {

  const { slug } = useParams()
  const playerRef = useRef<HTMLDivElement>(null);

  const getData = async () => {
    if (!slug) return
    return await getChannelData(slug)
  }



  useEffect(() => {
    getData()
    if (playerRef.current && typeof window !== "undefined") {
      window.jwplayer(playerRef.current).setup({
        file: "https://coolestguidesontheplanet.com/videodrome/cgp_video/mymovie.mp4",
        width: '100%',
        aspectratio: '16:9',
        autostart: true
      });
    }

    return () => {
      // Eliminar el nodo DOM (personalización)
      window.jwplayer().remove();
    };

  }, []);
  return <div ref={playerRef}></div>;



}


export default PlayerPage;

