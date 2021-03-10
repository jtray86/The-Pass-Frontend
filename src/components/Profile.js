// path="/profile/:id"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Trip from "./Trip";
import ProfileInfo from "./ProfileInfo";
// import data from "../data" 
import ProfileCard from "./ProfileCard"
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


function Profile({ currentUser, tripsData, oppositePresentation }){
    const userTrips = tripsData.find((trip) => trip.owner.id === currentUser.id)
    const params = useParams();
    const paramsId = params.id;
    const [displayUser, setDisplayUser] = useState(currentUser)

    const otherUsers = oppositePresentation !== null ? oppositePresentation.filter((user) => currentUser.travel_style === user.travel_style || currentUser.activity_level === user.activity_level) : null;


    const otherUserCard = otherUsers.map((user) => {
        return(
            <ProfileCard
                key = {user.id}
                user={user}
            />
        )
        });

    useEffect(() => {
        if (displayUser.id !== paramsId) {
            fetch(`http://localhost:3000/user/${paramsId}`)
            .then((r) => r.json())
            .then((user) => {
                setDisplayUser(user);
            })
        } else {
        setDisplayUser(currentUser)
        }
    },[paramsId]);

    const userProfileTrips = tripsData.filter((trip) => trip.owner.id === displayUser.id)
    
    return (
            <Container>
                <Row>
                    <Col md={{ span: 7, offset: 0 }}>       
                        <ProfileInfo displayUser={displayUser} userProfileTrips={userProfileTrips} currentUser={currentUser} />
                    </Col>

                    <Col md={{ span: 4, offset: 1 }}>
                        <h3 style={{ "text-align": "center"}}>Users Who Share <br/> Your Interests</h3>
                        {otherUserCard}
                    </Col>
                </Row>
            </Container>
    )
}

export default Profile