import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SearchVideo from "./SearchVideo";
import ListVideos from "./ListVideos";
import { orange } from "@material-ui/core/colors";
import { useState } from "react";
import VideoPay from "./VideoPlay";
import Logo from "./Logo";
import Notification from "./Notification";
import VideoCount from "./VideoCount";
import theme from "../../Theme";
import LeftBar from "./LeftBar";

const useStyles = makeStyles((theme) => ({
   root: {
      // flexGrow: 1,
      maxHeight: "900px",
      overflow: "hidden",
      marginBottom: "10px",
      marginTop: "10px",
      overflowX: "clip",
   },
   paper: {
      padding: theme.spacing(2),
      height: "100%",
   },
   spacing: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
   },
}));

const MusicBox = () => {
   const classes = useStyles();
   const [activeVideoId, setActiveVideoId] = useState("");
   const [selectedVideos, setSelectedVideos] = useState([]);

   const handleActiveVideo = (value) => {
      setActiveVideoId(value);
   };

   const nextActive = (value) => {
      setActiveVideoId(value);
   };

   const checkedVideo = (value) => {
      const copyArr = [...selectedVideos];
      for (const id of value) {
         const index = copyArr.indexOf(id);
         if (selectedVideos.includes(id) === false) {
            setSelectedVideos([...selectedVideos, id]);
         } else {
            if (index !== -1) {
               copyArr.splice(index, 1);
               setSelectedVideos(copyArr);
            }
         }
      }
   };

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Grid container spacing={1}>
            <LeftBar classes={classes} />
            <Grid item xs={5}>
               <VideoPay
                  nextActive={nextActive}
                  activeVideoId={activeVideoId}
                  className={classes.paper}
               />
               <ListVideos
                  checkedVideo={checkedVideo}
                  activeVideoId={activeVideoId}
                  activeVideo={handleActiveVideo}
                  classes={classes}
               />
            </Grid>
            <SearchVideo classes={classes} />
         </Grid>
      </ThemeProvider>
   );
};

export default MusicBox;
