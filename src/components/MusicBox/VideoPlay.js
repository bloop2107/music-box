import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Playbar from "./Playbar";
import loading from "../../asset/images/loading.svg";
import Box from "@material-ui/core/Box";

const VideoPlay = ({ activeVideoId, mainVideo, nextActive }) => {
   const urlUtube = "https://www.youtube.com/watch?v=";

   const [activeVideo, setActiveVideo] = useState({
      url: null,
      pip: false,
      playing: false,
      controls: false,
      light: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
   });

   useEffect(() => {
      setActiveVideo({
         ...activeVideo,
         url: `https://www.youtube.com/watch?v=${activeVideoId}`,
      });
   }, [activeVideoId]);

   const currVidIndex = mainVideo.findIndex(
      (video) => urlUtube + video.videoId === activeVideo.url
   );

   const onEnded = () => {
      if (currVidIndex < mainVideo.length) {
         setActiveVideo({
            ...activeVideo,
            url: mainVideo[currVidIndex + 1]
               ? urlUtube + mainVideo[currVidIndex + 1].videoId
               : urlUtube + mainVideo[0].videoId,
         });
      }
      nextActive(
         mainVideo[currVidIndex + 1]
            ? mainVideo[currVidIndex + 1].videoId
            : mainVideo[0].videoId
      );
   };

   const onPaused = () => {
      setActiveVideo({ ...activeVideo, playing: false });
   };

   const onPlayed = () => {
      setActiveVideo({ ...activeVideo, playing: true });
   };

   const onPause = () => {
      setActiveVideo({ ...activeVideo, playing: false });
   };

   const onPlay = () => {
      if (mainVideo.length > 0) {
         if (activeVideoId) {
            setActiveVideo({ ...activeVideo, playing: true });
         } else {
            setActiveVideo({
               ...activeVideo,
               url: urlUtube + mainVideo[0].videoId,
               playing: true,
            });
            nextActive(mainVideo[0].videoId);
         }
      }
   };

   const onNext = () => {
      setActiveVideo({
         ...activeVideo,
         url: mainVideo[currVidIndex + 1]
            ? urlUtube + mainVideo[currVidIndex + 1].videoId
            : null,
      });
      nextActive(
         mainVideo[currVidIndex + 1]
            ? mainVideo[currVidIndex + 1].videoId
            : mainVideo[0].videoId
      );
   };

   const onPrev = () => {
      if (currVidIndex > 0) {
         setActiveVideo({
            ...activeVideo,
            url: mainVideo[currVidIndex - 1]
               ? urlUtube + mainVideo[currVidIndex - 1].videoId
               : null,
         });
      }
      nextActive(
         mainVideo[currVidIndex - 1]
            ? mainVideo[currVidIndex - 1].videoId
            : mainVideo[0].videoId
      );
   };

   console.log(activeVideoId);

   return (
      <>
         {activeVideoId ? (
            <ReactPlayer
               width="100%"
               height="250px"
               url={activeVideo.url}
               pip={activeVideo.pip}
               playing={activeVideo.playing}
               controls={activeVideo.controls}
               light={activeVideo.light}
               volume={activeVideo.volume}
               muted={activeVideo.muted}
               played={activeVideo.played}
               loaded={activeVideo.loaded}
               duration={activeVideo.duration}
               playbackRate={activeVideo.playbackRate}
               loop={activeVideo.loop}
               onEnded={onEnded}
               onPause={onPaused}
               onPlay={onPlayed}
            />
         ) : (
            <Box
               padding="20px"
               display="flex"
               justifyContent="center"
               height="250px"
               border="1px solid #f9982d"
            >
               <img src={loading} alt="loading" />
            </Box>
         )}
         <Playbar
            activeVideo={activeVideo}
            onPrev={onPrev}
            onNext={onNext}
            onPause={onPause}
            onPlay={onPlay}
         />
      </>
   );
};

export default VideoPlay;
