import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup'

import Trip from "./Trip";
import { useHistory } from "react-router-dom";


function ProfileInfo({ currentUser, displayUser, userProfileTrips }){
    const {
            username,
            age,
            presentation,
            name,
            image,
            email,
            bio, 
            activity_level,
            food_preferances,
            travel_style,
            favorite_trip
            } = displayUser

    const history = useHistory();

    function handleEditClick() {
        history.push("/editprofile")
    };

    const userTripsCards = userProfileTrips.map((trip) => {
        return (
        <Trip key={trip.id} trip={trip} />
        )
    });
            
    return(
        <Container>
            <Row>
                <Col sm={4}>
                    <Image src= {image} alt={username} thumbnail />
                    {/* <img src= {image} alt={username} /> */}
                </Col>
                <Col sm={8}>
                    {/* Add conditional logic for viewing other people's profiles */}
                    { displayUser.username === currentUser.username ? <Button onClick={handleEditClick} variant="primary" style={{float: "right"}}>Edit Profile</Button> : null}
                
                <h4>Name: {name}, {age}</h4>
                <h5>Gender Presentation: {presentation}</h5>
                <h6>Username: {username}</h6>
                <p>Bio: {bio} </p>
                </Col>
                <Col sm={12}>
                    <h5>Activity Level: {activity_level}</h5>
                    <h5>Food Preferances: {food_preferances}</h5>
                    <h5>Travel Style: {travel_style}</h5>
                    <p>Favorate Trip:  {favorite_trip}</p>
                    </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Button onClick={() => history.push("/tripForm")} variant="primary" style={{float: "right"}}>Add a Trip</Button>
                </Col>
                <Container>

                </Container>
                <Col sm={12} style={{ "padding-top": "15px" }}>
                    <CardGroup>
                    {userTripsCards}
                    </ CardGroup>
                </Col>
            </Row>
        </Container>
    )
};

export default ProfileInfo;