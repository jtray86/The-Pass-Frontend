import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Trip from "./Trip";
import Image from 'react-bootstrap/Image'

function ProfileInfo({user}){
    const {username,
    image,
    email,
    bio, 
    activity_Level,
    food_preferances,
    travel_style,
    Favorate_trip} = user
    return(
        <Container>
            <Row>
                <Col sm={4}>
                    <Image src= {image} alt={username} thumbnail />
                    {/* <img src= {image} alt={username} /> */}
                </Col>
                <Col sm={8}>
                <h5>Name: {username}</h5>
                <p>Bio: {bio} </p>
                </Col>
                <Col sm={12}>
                    <h5>Activity Level: {activity_Level}</h5>
                    <h5>Food Preferances: {food_preferances}</h5>
                    <h5>Travel Style: {travel_style}</h5>
                    <p>Favorate Trip:  {Favorate_trip}</p>
                    </Col>
                <Col sm={12}>
                    <Trip />
                </Col>
            </Row>
        </Container>
    )
};

export default ProfileInfo;