import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SearchVideo from './components/SearchVideo';
import ListVideos from './components/ListVideos'
import { orange } from '@material-ui/core/colors';
import { useState } from 'react'
import VideoPay from './components/VideoPlay'
import Logo from './components/Logo'
import { Notification } from './components/Notification';
import LoginWithGoogle from './components/LoginWithGoogle';
import VideoCount from './components/VideoCount';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxHeight: '900px',
    overflow: 'hidden',
    marginBottom: '10px',        
    marginTop: '10px'
    
  },
  paper: {
    padding: theme.spacing(2),
    height: "100%",
  },
  spacing: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }
}));

function App() {

  const classes = useStyles();
  const theme = createMuiTheme({
      palette: {
          type: "dark",
          primary: orange,
            
      }
  })


  const [mainVideo,setMainVideo] = useState([]);
  const [activeVideoId,setActiveVideoId] = useState('');
  const [statusNotifiParent,setStatusNotifi] = useState(
    {
        open: false,
        title: '',
        type: ''
    }
  )
  const [selectedVideos,setSelectedVideos] = useState([]);

  const handleMainVideo = (value) => {

      const checkExist = mainVideo.find((video) => video.videoId  === value.videoId);
      if(!checkExist){
        if(value.duration < 600){
            setMainVideo([...mainVideo,value])
            setStatusNotifi({...statusNotifiParent,open: true, title: 'Add video successfully',type: 'success'});
            setTimeout(() => {
              setStatusNotifi({...statusNotifiParent,open: false})
            }, 3000);
        } else {
            setStatusNotifi({...statusNotifiParent,open: true, title: 'Video should not be more than 10 minutes',type: 'error'});
            setTimeout(() => {
              setStatusNotifi({...statusNotifiParent,open: false})
            }, 3000);
        }
        
        
        
      } else {

        setStatusNotifi({...statusNotifiParent,open: true, title: 'Video exist',type: 'error'});
        setTimeout(() => {
          setStatusNotifi({...statusNotifiParent,open: false})
        }, 3000);
        
      }
      console.log(value);
  }

  const handleActiveVideo = (value) => {
    setActiveVideoId(value);
  }

  const nextActive = (value) => {
    setActiveVideoId(value)
  }

  const checkedVideo = (value) => {
      
  }

  console.log(selectedVideos);


  return (
    <div className="App">
      <Container fixed className={classes.root}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            
            <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Paper elevation={3} className={`${classes.paper} ${classes.spacing}`} >
                    <Logo />
                    <LoginWithGoogle />
                    <VideoCount totalVideo = {mainVideo.length} />
                  </Paper>
                </Grid>
                <Grid item xs={5} >  
                      <VideoPay nextActive={nextActive} activeVideoId={activeVideoId} mainVideo={mainVideo}  className={classes.paper}/>
                      <ListVideos checkedVideo={checkedVideo} activeVideoId={activeVideoId} activeVideo={handleActiveVideo} mainVideo={mainVideo} classes={classes}/>
                </Grid>
                <SearchVideo handleMainVideo={handleMainVideo} classes={classes} />
            </Grid>
            <Notification statusNotifiParent={statusNotifiParent}/>
        </ThemeProvider>
      </Container>
      
    </div>
  );
}

export default App;
