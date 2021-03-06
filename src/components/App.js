import logo from '../logo.svg';
import '../App.css';
import {Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Header  from "./Header";
import Home  from "./Home";
import Signup  from "./Signup";
import Trips  from "./Trips";
import Profile  from "./Profile";
import EditProfile from "./EditProfile"
import TripForm from './TripForm'


function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    age: "",
    realname: "",
    image: "https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg",
    email: "",
    bio: "", 
    activity_level: "",
    food_preferances: "",
    travel_style: "",
    Favorate_trip: ""
  });

  // auto-login!
  useEffect(() => {
    // TODO: check if a user has already logged in (look for their token)
    // if they've already logged in, use that token to them in again
    const token = localStorage.getItem("token");
    if (token) {
      // request => GET /me
      // send the token with the request
      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          // response => setCurrentUser
          setCurrentUser(user);
        });
    }
  }, []);


  return (
    <div>
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tripForm">
          <TripForm currentUser={currentUser} />
        </Route>
        <Route path="/profile/:id">
          <Profile currentUser={currentUser} /> 
        </Route>
        <Route path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/trips">
          <Trips />
        </Route>
        <Route path="/editprofile">
          <EditProfile currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
