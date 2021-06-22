import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import SearchVideo from './components/SearchVideo';
import ListVideos from './components/ListVideos'
import { orange } from '@material-ui/core/colors';
import { useState } from 'react'
import VideoPay from './components/VideoPlay'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: 0,
  },
  paper: {
    padding: theme.spacing(3),
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

  return (
    <div className="App">
      <Container fixed>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container spacing={3}>
                <Header classes={classes} />
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            <Grid item xs={5}>  
                <VideoPay activeVideoId={activeVideoId} />
                <ListVideos activeVideo={handleActiveVideo} mainVideo={mainVideo} classes={classes}/>
            </Grid>

                <SearchVideo handleMainVideo={handleMainVideo} classes={classes} />
                {/* <Grid item xs={12}>
                  <Paper className={classes.paper}>xs=12</Paper>
                </Grid> */}
            </Grid>
        </ThemeProvider>
      </Container>
      
    </div>
  );
}

export default App;
