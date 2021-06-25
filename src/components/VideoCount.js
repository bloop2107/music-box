import Button from '@material-ui/core/Button';
import {useState, useEffect} from 'react';

const VideoCount = ({removeVideo,totalVideo}) => {
    const [totalVideos,setTotalVideo] = useState('');

    useEffect(()=>{
        setTotalVideo(totalVideo);
    },[totalVideo])

    const handleOnClick = () => {
        removeVideo();
    }

    return (
        <Button onClick={handleOnClick}  variant="contained" color="primary" style={{width: '100%'}}>
            {/* `VIDEO IN BOX ${totalVideo}`  */}
            VIDEO IN BOX ({totalVideos}) 
        </Button>
    )
}

export default VideoCount
