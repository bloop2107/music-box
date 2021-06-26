import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Logo from "./Logo";
import LoginWithGoogle from "./LoginWithGoogle";
import VideoCount from "./VideoCount";

const LeftBar = ({ classes, mainVideo }) => {
   return (
      <Grid item xs={3}>
         <Paper elevation={3} className={`${classes.paper} ${classes.spacing}`}>
            <Logo />
            <LoginWithGoogle />
            <VideoCount totalVideo={mainVideo.length} />
         </Paper>
      </Grid>
   );
};

export default LeftBar;
