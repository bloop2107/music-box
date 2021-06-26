import React from "react";
import theme from "../../Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import firebase, { auth } from "../firebase/config";
import firebase, { auth } from "../../firebase/config";

import { useHistory } from "react-router";

const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
   const handleLoginGoogle = async () => {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      console.log({ user });
   };

   const history = useHistory();

   auth.onAuthStateChanged((user) => {
      if (user) {
         history.push("/");
      }
   });

   return (
      <ThemeProvider theme={theme}>
         <Grid container justify="center">
            <Paper elevation={3}>
               <Button onClick={handleLoginGoogle} color="primary">
                  Login with Google
               </Button>
            </Paper>
         </Grid>
      </ThemeProvider>
   );
};

export default Login;
