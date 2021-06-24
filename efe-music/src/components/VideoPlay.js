import ReactPlayer from "react-player";
import { useState,useEffect } from 'react'
import Playbar from './Playbar'

const VideoPlay = ({activeVideoId, mainVideo, nextActive}) => {
    const urlUtube = 'https://www.youtube.com/watch?v='; 

    const [activeVideo, setActiveVideo] = useState({
        url: null,
        pip: false,
        playing: true,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    });

    useEffect(() => {
        setActiveVideo({...activeVideo, url: `https://www.youtube.com/watch?v=${activeVideoId}`})
    }, [activeVideoId])

    const currVidIndex = mainVideo.findIndex(
        (video) => urlUtube+video.videoId === activeVideo.url
    );
    
    const onEnded = () => {
        
        if (currVidIndex < mainVideo.length) {
          setActiveVideo({
            ...activeVideo,
            url: mainVideo[currVidIndex + 1]
            ? urlUtube+mainVideo[currVidIndex + 1].videoId
            : urlUtube+mainVideo[0].videoId
          });
        }
        nextActive((mainVideo[currVidIndex + 1]) ? mainVideo[currVidIndex + 1].videoId : mainVideo[0].videoId );
    };

    const onPause = () => {
        setActiveVideo({...activeVideo,playing: false})
    }

    const onPlay = () => {
        setActiveVideo({...activeVideo,playing: true})
    }

    const onNext = () => {
        setActiveVideo({
            ...activeVideo,
            url: mainVideo[currVidIndex + 1]
              ? urlUtube+mainVideo[currVidIndex + 1].videoId
              : null
        });
        nextActive((mainVideo[currVidIndex + 1]) ? mainVideo[currVidIndex + 1].videoId : mainVideo[0].videoId );
    } 

    const onPrev = () => {
        if(currVidIndex > 0){
            setActiveVideo({
                ...activeVideo,
                url: mainVideo[currVidIndex - 1]
                  ? urlUtube+mainVideo[currVidIndex - 1].videoId
                  : null
            });   
        }
        nextActive((mainVideo[currVidIndex - 1]) ? mainVideo[currVidIndex - 1].videoId : mainVideo[0].videoId );
    }

    return (
        <>
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
                onEnded={(onEnded)}
            />   
            <Playbar onPrev={onPrev} onNext={onNext} onPause={onPause} onPlay={onPlay} />
        </>
    )
}

export default VideoPlay
