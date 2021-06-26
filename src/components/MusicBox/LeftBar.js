import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Logo from "./Logo";
import VideoCount from "./VideoCount";
import Button from "@material-ui/core/Button";
import { auth } from "../../firebase/config";

const LeftBar = ({ classes, mainVideo }) => {
   return (
      <Grid item xs={3}>
         <Paper elevation={3} className={`${classes.paper} ${classes.spacing}`}>
            <Logo />
            <Button
               Button
               variant="contained"
               color="primary"
               style={{ width: "100%" }}
               onClick={() => auth.signOut()}
            >
               LOG OUT
            </Button>
            <VideoCount totalVideo={mainVideo.length} />
         </Paper>
      </Grid>
   );
};

export default LeftBar;
