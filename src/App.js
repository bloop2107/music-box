import MusicBox from "./components/MusicBox/MusicBox";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";

function App() {
   return (
      <Router>
         <AuthProvider>
            <Switch>
               <Route component={Login} path="/login" />
               <Route component={MusicBox} path="/" />
            </Switch>
         </AuthProvider>
      </Router>
   );
}

export default App;
