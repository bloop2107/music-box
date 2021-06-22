import ReactPlayer from "react-player";
import { useState,useEffect } from 'react'

const VideoPlay = ({activeVideoId}) => {

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
    

    return (
        <>
            <ReactPlayer
                width="100%"
                height="200px"
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
            />   
        </>
    )
}

export default VideoPlay
