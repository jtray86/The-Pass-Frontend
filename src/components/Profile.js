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
    const userTrips = tripsData.find((trip) => trip.user.id === currentUser.id)
    const params = useParams();
    const paramsId = params.id;
    const [displayUser, setDisplayUser] = useState(currentUser)

    const otherUser = oppositePresentation !== null ? oppositePresentation.map((user) => {
        console.log("cards")
        return(
            <ProfileCard
                key = {user.id}
                user={user}
            />
        )
    }) : null

    useEffect(() => {
        if (displayUser.id !== paramsId) {
            fetch(`http://localhost:3000/user/${paramsId}`)
            .then((r) => r.json())
            .then((user) => {
                console.log(user);
                setDisplayUser(user);
            })
        } else {
        setDisplayUser(currentUser)
        }
    },[paramsId]);

    const userProfileTrips = tripsData.filter((trip) => trip.user.id === currentUser.id)
    
    return (
            <Container>
                <Row>
                    <Col md={{ span: 7, offset: 0 }}>       
                        <ProfileInfo displayUser={displayUser} userProfileTrips={userProfileTrips} currentUser={currentUser} />
                    </Col>

                    <Col md={{ span: 4, offset: 1 }}>
                            {otherUser}
                    </Col>
                </Row>
            </Container>
    )
}

export default Profile