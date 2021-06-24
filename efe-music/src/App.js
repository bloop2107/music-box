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
import Button from '@material-ui/core/Button';
import logo from './asset/images/logo.png'
import Box from '@material-ui/core/Box';
import { Notification } from './components/Notification';


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

  const handleMainVideo = (value) => {

      const checkExist = mainVideo.find((video) => video.videoId  === value.videoId);
      if(!checkExist){

        setMainVideo([...mainVideo,value])
        setStatusNotifi({...statusNotifiParent,open: true, title: 'Add video successfully ! !',type: 'success'});
        setTimeout(() => {
          setStatusNotifi({...statusNotifiParent,open: false})
        }, 3000);
        
      } else {

        setStatusNotifi({...statusNotifiParent,open: true, title: 'Video exist !',type: 'error'});
        setTimeout(() => {
          setStatusNotifi({...statusNotifiParent,open: false})
        }, 3000);
        
      }
  }

  const handleActiveVideo = (value) => {
    setActiveVideoId(value);
  }

  const nextActive = (value) => {
    setActiveVideoId(value)
  }

  return (
    <div className="App">
      <Container fixed className={classes.root}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            
            <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Paper elevation={3} className={classes.paper}>
                    <Box display="flex" justifyContent="center" >
                        <img src={logo} alt="Logo" style={{width: '200px', marginBottom: "10px"}}/>
                    </Box>
                    <Button Button  variant="contained" color="primary" style={{width: '100%'}}>
                        Login with Google
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={5} >  
                      <VideoPay nextActive={nextActive} activeVideoId={activeVideoId} mainVideo={mainVideo}  className={classes.paper}/>
                      <ListVideos activeVideoId={activeVideoId} activeVideo={handleActiveVideo} mainVideo={mainVideo} classes={classes}/>
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
