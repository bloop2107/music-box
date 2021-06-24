import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import {useState} from 'react';
import Fade from '@material-ui/core/Fade';     
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& .MuiButtonBase-root': {
              justifyContent: "flex-start"
          },
          justifyContent: "flex-start"
        },
        details: {
          display: 'flex',
          flexDirection: 'column',
        },
        content: {
          flex: '1 0 auto',
        },
        cover: {
            width: "30%",
            height: '100%'
        },
        controls: {
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme.spacing(1),
        //   paddingBottom: theme.spacing(1),
        },
        media:{
          padding: 0,
          paddingLeft: '15px',
          paddingBottom: '10px !important',
        },
        desc: {
          fontSize: '10px',
          marginTop: '15px',
          textAlign: 'initial'
        },
        title: {
          fontSize: '15px',
          textAlign: 'initial'
        },
        centerRipple: true

    }));

    

const ResultVideos = ({ searchResults, res }) => {
        const [state, setState] = useState({
            open: false,
            Transition: Fade,
        });

        const handleClose = () => {
            setState({
            ...state,
            open: false,
            });
        };

        const classes = useStyles();
        const handleOnClick = (e) => {  
            const value = e.currentTarget.value;
            const videoSelect = searchResults.find((item) => item.videoId === value); 
            res(videoSelect);
            setState({
                open: true,
                Transition: Fade,
            });
        }


    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component="div" mt={2} >
            <Box  style={{height: '500px'}} overflow="auto" className={classes.list}>
            {
                searchResults.map((video,idx) => 
                        <Box key={idx} p={1} > 
                            <Card className={classes.root}>
                                <ButtonBase
                                    value={video.videoId}
                                    onClick={handleOnClick}
                                    className={classes.root}
                                >
                                    <CardMedia
                                        className={classes.cover}
                                        component="img"
                                        src={video.thumbnails[0].url}
                                        title="Live from space album cover"
                                    />
                                    <CardContent className={classes.media}>
                                        <Typography className={classes.title} component="h6" variant="h6">
                                            {video.title}
                                        </Typography>
                                        <Typography className={classes.desc} component="p" color="textSecondary">
                                            {video.channel}
                                            <br/>
                                            {video.views}
                                        </Typography>
                                    </CardContent>
                                </ButtonBase>
                            </Card>
                        </Box>
                )         
            }
            </Box>
                        
            {/* <Snackbar
                open={state.open}
                TransitionComponent={state.Transition}
                message="I love snacks"
                key={state.Transition.name}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <Alert onClose={handleClose} severity="success" variant="filled">
                        Add video successfully !
                </Alert>
            </Snackbar> */}
                        
        </Box>
        </ThemeProvider>
        
    )
}

export default ResultVideos
