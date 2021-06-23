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


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxHeight: '900px',
    overflow: 'hidden',
    marginBottom: '10px',        
    marginTop: '10px'
  },
  paper: {
    padding: theme.spacing(3),
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

  const handleMainVideo = (value) => {
      setMainVideo([...mainVideo,value])
      console.log(value);
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
            
            <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>
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
        </ThemeProvider>
      </Container>
      
    </div>
  );
}

export default App;
