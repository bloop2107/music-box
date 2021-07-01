import ReactPlayer from "react-player";
import { useState, useEffect, useContext } from "react";
import Playbar from "./Playbar";
import loading from "../../asset/images/loading.svg";
import Box from "@material-ui/core/Box";
import { AppContext } from "../../Context/AppProvider";
const VideoPlay = ({ activeVideoId, nextActive }) => {
   const urlUtube = "https://www.youtube.com/watch?v=";
   const { videos } = useContext(AppContext);
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

   const currVidIndex = videos.findIndex(
      (video) => urlUtube + video.video.videoId === activeVideo.url
   );

   const onEnded = () => {
      if (currVidIndex < videos.length) {
         setActiveVideo({
            ...activeVideo,
            url: videos[currVidIndex + 1]
               ? urlUtube + videos[currVidIndex + 1].video.videoId
               : urlUtube + videos[0].video.videoId,
         });
      }
      nextActive(
         videos[currVidIndex + 1]
            ? videos[currVidIndex + 1].video.videoId
            : videos[0].video.videoId
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
      if (videos.length > 0) {
         if (activeVideoId) {
            setActiveVideo({ ...activeVideo, playing: true });
         } else {
            setActiveVideo({
               ...activeVideo,
               url: urlUtube + videos[0].video.videoId,
               playing: true,
            });
            nextActive(videos[0].video.videoId);
         }
      }
   };

   const onNext = () => {
      setActiveVideo({
         ...activeVideo,
         url: videos[currVidIndex + 1]
            ? urlUtube + videos[currVidIndex + 1].videoId
            : null,
      });
      nextActive(
         videos[currVidIndex + 1]
            ? videos[currVidIndex + 1].videoId
            : videos[0].videoId
      );
   };

   const onPrev = () => {
      if (currVidIndex > 0) {
         setActiveVideo({
            ...activeVideo,
            url: videos[currVidIndex - 1]
               ? urlUtube + videos[currVidIndex - 1].videoId
               : null,
         });
      }
      nextActive(
         videos[currVidIndex - 1]
            ? videos[currVidIndex - 1].videoId
            : videos[0].videoId
      );
   };

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
