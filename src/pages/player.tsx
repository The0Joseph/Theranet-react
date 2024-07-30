// import { useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// // import { getChannelData } from "../services/api";

// declare global {
//   interface Window {
//     jwplayer: any; 
//   }
// }


import JWPlayer from '@jwplayer/jwplayer-react';

function PlayerPage() {

  // const { slug } = useParams()
  // const playerRef = useRef<HTMLDivElement>(null);

  // // const getData = async () => {
  // //   if (!slug) return
  // //   return await getChannelData(slug)
  // // }



  // useEffect(() => {
  //   if (playerRef.current && typeof window !== "undefined") {
  //     window.jwplayer(playerRef.current).setup({
  //       file: "https://coolestguidesontheplanet.com/videodrome/cgp_video/mymovie.mp4",
  //       width: '100%',
  //       aspectratio: '16:9',
  //       autostart: true
  //     });
  //   }


  // }, [playerRef]);
  // return <div ref={playerRef}></div>;

  const config = {
    key: "XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo",
    stretching: "exactfit",
    width: "100%",
    heigth: "100%",
    aspectratio: "16:9",
    autostart: true,
    cast: {},
    sharing: {},
  }

  return (
    <JWPlayer
      library='https://ssl.p.jwpcdn.com/player/v/8.22.0/jwplayer.js'
      file="https://coolestguidesontheplanet.com/videodrome/cgp_video/mymovie.mp4"
      config={config}
    />

  );

}


export default PlayerPage;

