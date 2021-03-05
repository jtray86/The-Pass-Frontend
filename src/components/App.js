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
  const [currentUser, setCurrentUser] = useState(null);

  console.log(currentUser);

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

  // const user =
  //   {
  //       id: 1,
  //       username: "Jtray86",
  //       realname: "Jen",
  //       age: 34,
  //       image:"https://www.telegraph.co.uk/content/dam/fashion/2019/02/07/GettyImages-824296158_trans_NvBQzQNjv4BqdsqbsZL_ZhuUNVNgtppgSVfvYIpE8WooDS_kmLGJk-A.jpg",
  //       email: "jenniferetracy@gmail.com",
  //       bio: "dkjbfiwbsdf dksjbfvisdbv ksdjbcskdbvco sdkc ksdbv h sdfk bskxb ikzj  kdbxik. kdsb cksd cvskd cvksk bc sv.",
  //       activity_Level: "Medium",
  //       food_preferances: "Meat Eater",
  //       travel_style: "Sightseeing",
  //       Favorate_trip: "ofodihpowdifhi oidbncijsbdciu ojdncjsbdivb sjdcoshdokn ojdsncosbdcvbsd isdjbciosbdo."

  //   };
  
  
  // const user = users.find((user) => user.id === 1);

  // setCurrentUser(user)
  
  // console.log(currentUser);


  return (
    <div>
      <Header setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tripForm">
          <TripForm/>
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
