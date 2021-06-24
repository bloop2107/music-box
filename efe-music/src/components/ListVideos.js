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
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { useState, useEffect } from 'react';

const GreenCheckbox = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      },'&:hover': {
        backgroundColor: 'transparent',
      }
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

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


const ListVideos = ({classes,checkedVideo, mainVideo, activeVideo, activeVideoId}) => {
    
    const classList = useStyles();

    const handleOnClick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        activeVideo(e.currentTarget.value)
    }



    const selectedCheckboxes = new Set();
    const handleCheckBox = (e) => {
        var value = e.target.value
        if(selectedCheckboxes.has(value)){
            selectedCheckboxes.delete(value);
        } else {
            selectedCheckboxes.add(value);
        }
        const storeChecked = Array.from(selectedCheckboxes);
        checkedVideo(storeChecked);
    }



    return (
                <Paper className={classList.root}>
                    <List className={classList.list} component="nav"  aria-label="contacts">
                        {
                            mainVideo.map((item, idx) => 
                            <Box display="flex" key={idx} >
                                <GreenCheckbox
                                    value={idx}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    onChange={handleCheckBox}
                                />
                                <ButtonBase
                                    value={item.videoId}
                                    onClick={handleOnClick}
                                    className={`${classList.button} ${(item.videoId === activeVideoId) ? classList.active : null}`}
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
