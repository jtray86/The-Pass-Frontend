// > path="/trip/:id"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import TripForm from './TripForm';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';



function TripShow({ handleTripDelete, currentUser }) {
    init("user_7xvBpH1XrMDI9gnM2D2P0");
    const [trip, setTrip] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const params = useParams();
    const id = params.id;
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3000/trip/${id}`)
        .then((r) => r.json())
        .then((trip) => {
            setTrip(trip);
            setIsLoaded(true);
        });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const { name, city, country, start_date, end_date, description, image, user} = trip

    function handleDeleteClick(e) {
        console.log(e);
        fetch(`http://localhost:3000/trip/${id}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((trip) => handleTripDelete(trip.id))
        history.push(`/profile/${user.id}`);
    }

    function handleMatchClick(e) {
        console.log(e);
        // fetch(`http://localhost:3000/match/${currentUser.id}/${trip.user.id}`)
        // .then((r) => console.log())
        // .then((data) => {
        //     console.log(data)
        // });
        const templateParams = {
            to_name: user.name,
            from_name: currentUser.name,
            from_email: currentUser.email,
            from_id: currentUser.id,
            to_email: user.email,
            trip_name: name };

        emailjs.send('service_wasxyvd', 'template_8ov3cts', templateParams)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
    }

    return(
        <Container>
            <Row>
                <Col sm={4}>
                    <Image src={image} alt={name} thumbnail />
                    {/* <img src= {image} alt={username} /> */}
                </Col>

                <Col sm={8}>
                    {/* Add conditional logic for viewing other people's profiles */}
                <Button onClick={() => history.push(`/tripsForm`)} variant="primary" style={{float: "right"}}>Edit Trip</Button>
                <Button onClick={handleDeleteClick} variant="warning" style={{float: "right"}}>Delete Trip</Button>
                    <h4>{name}</h4>
                    <h5> {city}, {country} </h5>
                    <h6>Start Date: {start_date} | End Date: {end_date}</h6>
                    <p>Trip Description: {description} </p>
                    <Button onClick={handleMatchClick} variant="info">Request to Join Trip!</Button>
                </Col>
                <Col sm={2}>
                    <Image src={user.image} alt={user.name} thumbnail />
                    {/* <img src= {image} alt={username} /> */}
                    <p>{user.username}</p>
                    <Button onClick={() => history.push(`/profile/${user.id}`)} variant="primary">View Profile</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default TripShow;