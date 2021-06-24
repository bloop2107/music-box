import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root: {
        // paddingLeft: 0,
        // paddingTop: 0,
        // paddingBottom: 0
        height: '100%'
    },
    active: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)'
    },
    title: {
        // color: "#ffff"
    },
    list: {
        height: "500px",
        overflow: "auto",
    },
    button: {
        width: '100%'
    }
})


const ListVideos = ({classes, mainVideo, activeVideo, activeVideoId}) => {
    
    const classList = useStyles();


    const handleOnClick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        activeVideo(e.currentTarget.value)
    }

    return (
                <Paper className={classList.root}>
                    <List className={classList.list} component="nav"  aria-label="contacts">
                        {
                            mainVideo.map((item, idx) => 
                            <Box key={idx} className={(item.videoId === activeVideoId) ? classList.active : null }>
                                <ButtonBase
                                    value={item.videoId}
                                    onClick={handleOnClick}
                                    className={classList.button}
                                >
                                    <ListItem button> 
                                        <ListItemAvatar>
                                            <Avatar variant="square" alt="Remy Sharp" src={item.thumbnails[0].url}  />
                                        </ListItemAvatar>
                                        <ListItemText  primary={item.title} />

                                    </ListItem>
                                </ButtonBase>
                                <Divider />
                            </Box>
                            )
                        }
                    </List>
                </Paper>
                
    )
}

export default ListVideos
