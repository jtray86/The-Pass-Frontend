import logo from '../logo.svg';
import '../App.css';
import {Switch, Route} from "react-router-dom";
import { useState } from "react";
import Header  from "./Header";
import Home  from "./Home";
import Signup  from "./Signup";
import Trips  from "./Trips";
import Profile  from "./Profile";
import EditProfile from "./EditProfile"


function App() {
  // const [currentUser, setCurrentUser] = useState(null)

  const user =
    {
        id: 1,
        username: "Jtray86",
        realname: "Jen",
        age: 34,
        image:"https://www.telegraph.co.uk/content/dam/fashion/2019/02/07/GettyImages-824296158_trans_NvBQzQNjv4BqdsqbsZL_ZhuUNVNgtppgSVfvYIpE8WooDS_kmLGJk-A.jpg",
        email: "jenniferetracy@gmail.com",
        bio: "dkjbfiwbsdf dksjbfvisdbv ksdjbcskdbvco sdkc ksdbv h sdfk bskxb ikzj  kdbxik. kdsb cksd cvskd cvksk bc sv.",
        activity_Level: "Medium",
        food_preferances: "Meat Eater",
        travel_style: "Sightseeing",
        Favorate_trip: "ofodihpowdifhi oidbncijsbdciu ojdncjsbdivb sjdcoshdokn ojdsncosbdcvbsd isdjbciosbdo."

    };
  
  
  // const user = users.find((user) => user.id === 1);

  // setCurrentUser(user)
  
  // console.log(currentUser);


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile/:id">
          <Profile currentUser={user} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/trips">
          <Trips />
        </Route>
        <Route path="/editprofile">
          <EditProfile currentUser={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
