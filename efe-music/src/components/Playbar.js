import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    root:  {
        borderRadius: 0,
        display: "flex",
        justifyContent: "center",
        padding: "10px",
    },
    playButton: {
        padding: '5px',
    }
})



const Playbar = ({onPause,onPlay,onNext,onPrev}) => {
    const classes = useStyles();
    const [statusVideo,setStatusVideo] = useState(true);

    const handlePause = () => {
        setStatusVideo(false)
        onPause();
    }

    const handlePlay = () => { 
        setStatusVideo(true)
        onPlay();
    }

    const handleNext = () => {
        onNext();
    }

    const handlePrev = () => {
        onPrev();
    }
    
    return (
        <Box boxShadow={3} mb={1}>
            <Paper className={classes.root}>
                    <IconButton aria-label="play" className={classes.playButton}>
                        <SkipPreviousIcon onClick={handlePrev} color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="play" className={classes.playButton}>
                        {
                            statusVideo ? 
                            <StopRoundedIcon onClick={handlePause} color="primary" fontSize="large" /> :
                            <PlayCircleFilledIcon onClick={handlePlay} color="primary" fontSize="large" /> 
                        }
                    </IconButton>
                    <IconButton aria-label="play" className={classes.playButton}>
                        <SkipNextIcon onClick={handleNext} color="primary" fontSize="large" />  
                    </IconButton>
            </Paper>
        </Box>

    )
}

export default Playbar
