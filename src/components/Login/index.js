import React from "react";
import theme from "../../Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import firebase, { auth, db } from "../../firebase/config";
import { addDocument } from "../../firebase/services";

import { useHistory } from "react-router";

const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
   const handleLoginGoogle = async () => {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      const currentUser = auth.additionalUserInfo;
      if (additionalUserInfo?.isNewUser) {
         db.collection("users").add({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            uid: user.uid,
            providerId: additionalUserInfo.providerId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
         });
      }
      console.log({ user }, additionalUserInfo?.isNewUser);
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
