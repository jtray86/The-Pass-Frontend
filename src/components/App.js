// import logo from '../logo.svg';
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
import TripShow from './TripShow'


function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    age: "",
    name: "",
    image: "https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg",
    email: "",
    bio: "", 
    activity_level: "",
    food_preferances: "",
    travel_style: "",
    favorite_trip: "", 
    presentation: ""
  });

  const [oppositePresentation, setOppositePresentation] = useState(null)
  const [tripsData, setTripsData] = useState([])

  // auto-login
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
        })
    }
  }, []);

  //Fetching the trips data
  useEffect(() => {
    // TODO: check if a user has already logged in (look for their token)
    // if they've already logged in, use that token to them in again
    const token = localStorage.getItem("token");
    if (token) {
      // request => GET /me
      // send the token with the request
      fetch("http://localhost:3000/trips", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((trips) => {
          setTripsData(trips);
        });
    }
  }, []);

// fetching other users
  useEffect(() => {   
    if (currentUser) {
    const viewOthers = currentUser.presentation === "Female" ? "male" : "female"  
    const token = localStorage.getItem("token");
    if (token) {
      // request => GET /me
      // send the token with the request
      fetch(`http://localhost:3000/${viewOthers}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((users) => {
          setOppositePresentation(users)
        });
    }
    }
}, [currentUser])

  function handleTripDelete(id) {
    const newTripsArr = tripsData.filter((trip) => trip.id !== id)
    setTripsData(newTripsArr)
  }

  function handleNewTrip(trip) {
    console.log(trip);
    setTripsData([...tripsData, trip])
  }

  function handleTravlerAdd(updatedTrip) {
    const newTripsArr = tripsData.filter((trip) => trip.id !== updatedTrip.id)
    setTripsData([...newTripsArr, updatedTrip])
  }

  return (
    <div>
      <Header setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/profile/:id">
          <Profile currentUser={currentUser} tripsData={tripsData} oppositePresentation={oppositePresentation} /> 
        </Route>

        <Route path="/editprofile">
          <EditProfile currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>

        <Route path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>

        <Route path="/tripForm">
          <TripForm currentUser={currentUser} handleNewTrip={handleNewTrip} />
        </Route>

        <Route path="/trips">
          <Trips tripsData={tripsData} currentUser={currentUser} />
        </Route>
        
        <Route path="/trip/:id">
          <TripShow handleTripDelete={handleTripDelete} currentUser={currentUser} oppositePresentation={oppositePresentation} handleTravlerAdd={handleTravlerAdd} />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
