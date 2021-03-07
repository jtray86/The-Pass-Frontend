// > path="/trip/:id"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import TripForm from './TripForm';


function TripShow() {
    const [trip, setTrip] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // const history = useHistory();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/trip/${id}`)
        .then((r) => r.json())
        .then((trip) => {
            console.log(trip);
            setTrip(trip);
            setIsLoaded(true);
        });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const { name, city, country, start_date, end_date, description, image, user} = trip

    console.log(trip);

    console.log(start_date);

    function handleEditClick(e) {
        console.log(e);
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
                <Button onClick={handleEditClick} variant="primary" style={{float: "right"}}>Edit Trip</Button>
                    <h4>{name}</h4>
                    <h5> {city}, {country} </h5>
                    <h6>Start Date: {start_date} | End Date: {end_date}</h6>
                    <p>{description} </p>
                    <p>{user.id}</p>
                </Col>
            </Row>
        </Container>
    );

}

export default TripShow;