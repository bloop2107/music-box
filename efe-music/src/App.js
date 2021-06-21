import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import SearchVideo from './components/SearchVideo';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
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
      }
  })
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Grid container spacing={3}>
              <Header classes={classes} />
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <SearchVideo classes={classes} />
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
          </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
