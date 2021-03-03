import logo from '../logo.svg';
import '../App.css';
import {Switch, Route} from "react-router-dom";
import  Header  from "./Header";
import  Home  from "./Home";
import  Signup  from "./Signup";
import  Trips  from "./Trips";
import  Profile  from "./Profile";


function App() {
  return (
    <div>
      <Header />
    <Switch>
      <Route path="/profile/:id">
        <Profile />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/trips">
        <Trips />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
