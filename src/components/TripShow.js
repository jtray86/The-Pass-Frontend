// > path="/trip/:id"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
// import TripForm from './TripForm';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';





function TripShow({ handleTripDelete, currentUser, oppositePresentation, handleTravlerAdd }) {
    init("user_7xvBpH1XrMDI9gnM2D2P0");
    const [trip, setTrip] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const params = useParams();
    const tripId = params.id;
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [traveler, setTraveler]= useState({username:""})
    const [errors, setErrors] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        fetch(`http://localhost:3000/trip/${tripId}`)
        .then((r) => r.json())
        .then((trip) => {
            setTrip(trip);
            setIsLoaded(true);
        });
    }, [tripId]);

    if (!isLoaded) return <h2>Loading...</h2>;

    const { id, name, city, country, start_date, end_date, description, image, owner} = trip

    function handleDeleteClick(e) {
        console.log(e);
        fetch(`http://localhost:3000/trip/${id}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((trip) => handleTripDelete(trip.id))
        history.push(`/profile/${owner.id}`);
    }

    function handleMatchClick(e) {
        console.log(e);
        // fetch(`http://localhost:3000/match/${currentowner.id}/${trip.owner.id}`)
        // .then((r) => console.log())
        // .then((data) => {
        //     console.log(data)
        // });
        const templateParams = {
            to_name: owner.name,
            from_name: currentUser.name,
            from_email: currentUser.email,
            from_id: currentUser.id,
            to_email: owner.email,
            trip_name: name };

        emailjs.send('service_wasxyvd', 'template_8ov3cts', templateParams)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
    }


    function handleAddSubmit(e) {
        e.preventDefault();

        const addTraveler = oppositePresentation.filter((person) => person.username === traveler.username)
        console.log(addTraveler);

        const token = localStorage.getItem("token");
            if (token) {
            fetch(`http://localhost:3000/trip/${id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({addTraveler}),
                })
                .then((r) => r.json())
                .then((trip) => {
                console.log(trip);
                handleTravlerAdd(trip);
                setTrip(trip);
                handleClose();
                });
            }

    }

    function handleChange(e) {
        const addedTraveler = {...traveler} 
        addedTraveler[e.target.name] = e.target.value
        setTraveler(addedTraveler)
    }

    return(
        <Container>
            <Row>
                <Col sm={4}>
                    <Image src={image} alt={name} thumbnail />
                    {/* <img src= {image} alt={ownername} /> */}
                </Col>

                <Col sm={8}>
                    {/* Add conditional logic for viewing other people's profiles */}
                <Button onClick={() => history.push(`/tripsForm`)} variant="primary" style={{float: "right"}}>Edit Trip</Button>
                <Button onClick={handleDeleteClick} variant="warning" style={{float: "right"}}>Delete Trip</Button>
                    <h4>{name}</h4>
                    <h5> {city}, {country} </h5>
                    <h6>Start Date: {start_date} | End Date: {end_date}</h6>
                    <p>Trip Description: {description} </p>
                    {
                        trip.traveler ?  
                        <p>🎉 {trip.traveler.username} has joined the trip! 🎉</p> 
                            : owner.id === currentUser.id ? 
                            <Button onClick ={handleShow} variant="info">Add a User to Your Trip</Button> :
                            <Button onClick={handleMatchClick} variant="info">Request to Join Trip!</Button>
                    }
                
                        <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Log-in</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={(e) => handleAddSubmit(e)}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Travel Partner Username:</Form.Label>
                                            <Form.Control type="username" name="username" placeholder="Enter Username" value={traveler.username} onChange ={(e) =>handleChange(e)}/>
                                        </Form.Group>
                                    {errors.map((error) => (
                                    <p key={error} style={{ color: "red" }}>
                                        {error}
                                    </p>
                                    ))}

                                    <Modal.Footer>
                                        <Button variant="info" type="submit">Add User</Button>                      
                                    </Modal.Footer>
                                    </Form>   
                                </Modal.Body>
                        </Modal>
                </Col>
                <Col sm={2}>
                    <Image src={owner.image} alt={owner.name} thumbnail />
                    {/* <img src= {image} alt={ownername} /> */}
                    <p>{owner.username}</p>
                    <Button onClick={() => history.push(`/profile/${owner.id}`)} variant="primary">View Profile</Button>
                </Col>
            </Row>
        </Container>
    );

}

export default TripShow;