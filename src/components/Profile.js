// path="/profile/:id"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Trip from "./Trip";
import ProfileInfo from "./ProfileInfo";
// import data from "../data" 
import ProfileCard from "./ProfileCard"


function Profile({ currentUser, tripsData, oppositePresentation }){
    const userTrips = tripsData.find((trip) => trip.user.id === currentUser.id)

    const otherUser = oppositePresentation.map((user) => {
        return(
            <ProfileCard
                key = {user.id}
                user={user}
            />
        )
    })

    return (
            <Container>
                <Row>
                    <Col md={{ span: 7, offset: 0 }}>       
                        <ProfileInfo currentUser={currentUser} userTrips={userTrips} />
                    </Col>

                    <Col md={{ span: 4, offset: 1 }}>
                        {otherUser}
                    </Col>
                </Row>
            </Container>
    )
}

export default Profile