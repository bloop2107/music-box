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
import LoginWithGoogle from "./LoginWithGoogle";
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

   const [mainVideo, setMainVideo] = useState([]);
   const [activeVideoId, setActiveVideoId] = useState("");
   const [statusNotifiParent, setStatusNotifi] = useState({
      open: false,
      title: "",
      type: "",
   });
   const [selectedVideos, setSelectedVideos] = useState([]);

   const handleMainVideo = (value) => {
      const checkExist = mainVideo.find(
         (video) => video.videoId === value.videoId
      );
      if (!checkExist) {
         if (value.duration < 600) {
            setMainVideo([...mainVideo, value]);
            setStatusNotifi({
               ...statusNotifiParent,
               open: true,
               title: "Add video successfully",
               type: "success",
            });
         } else {
            setStatusNotifi({
               ...statusNotifiParent,
               open: true,
               title: "Video should not be more than 10 minutes",
               type: "error",
            });
         }
      } else {
         setStatusNotifi({
            ...statusNotifiParent,
            open: true,
            title: "Video exist",
            type: "error",
         });
      }
      console.log(value);
   };

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

   console.log(selectedVideos);

   return (
      <Container fixed className={classes.root}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container spacing={1}>
               <LeftBar classes={classes} mainVideo={mainVideo} />
               <Grid item xs={5}>
                  <VideoPay
                     nextActive={nextActive}
                     activeVideoId={activeVideoId}
                     mainVideo={mainVideo}
                     className={classes.paper}
                  />
                  <ListVideos
                     checkedVideo={checkedVideo}
                     activeVideoId={activeVideoId}
                     activeVideo={handleActiveVideo}
                     mainVideo={mainVideo}
                     classes={classes}
                  />
               </Grid>
               <SearchVideo
                  handleMainVideo={handleMainVideo}
                  classes={classes}
               />
            </Grid>
            <Notification statusNotifiParent={statusNotifiParent} />
         </ThemeProvider>
      </Container>
   );
};

export default MusicBox;
