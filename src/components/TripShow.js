// > path="/trip/:id"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import TripForm from './TripForm';


function TripShow({ handleTripDelete }) {
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