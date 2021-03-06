import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditProfile({ currentUser, setCurrentUser }) {
    const {
        id,
        username,
        age,
        name,
        image,
        email,
        bio, 
        activity_level,
        food_preferances,
        travel_style,
        favorite_trip
        } = currentUser


    const [formData, setFormData] = useState(
        {
            username: username,
            age: age,
            name: name,
            image: image,
            email: email,
            bio: bio,
            activity_level: activity_level,
            food_preferances: food_preferances,
            travel_style: travel_style,
            favorite_trip: favorite_trip
            }
    )

    const history = useHistory();


    function handleProfileSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
            if (token) {
            fetch("http://localhost:3000/me", {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
                })
                .then((r) => r.json())
                .then((user) => {
                // response => update the user in state
                setCurrentUser(user);
                history.push(`/profile/${user.id}`);
                });
            }
        
                // .then((data) => {
                //     setCurrentUser(data.user);
                //     history.push(`/profile/${data.id}`);
                // })
            
        // .catch((data) => {
        //     setErrors(data.errors);
        // });
    }

    function onFormChange(e) {
        const updatedForm = {...formData}
        updatedForm[e.target.name] = (e.target.value)
        
        setFormData(updatedForm)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleProfileSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" name="name" value={formData.name} onChange={(e) => onFormChange(e)}  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="age" name="age" value={formData.age} onChange={(e) => onFormChange(e)} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridBio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={3} name="bio" value={formData.bio} onChange={(e) => onFormChange(e)} />
                        </Form.Group>

                        <Form.Group controlId="formGridFavoriteTrip">
                            <Form.Label>Tell us about your favorite trip </Form.Label>
                            <Form.Control as="textarea" rows={3} name="favorite_trip" value={formData.favorite_trip} onChange={(e) => onFormChange(e)} />
                        </Form.Group>

                        <Form.Row>
                            
                            <Form.Group as={Col} controlId="formGridActivity">
                                <Form.Label>Preferred Activity Level</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="activity_level" value={formData.activity_level} onChange={(e) => onFormChange(e)}>
                                    <option>Choose...</option>
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFood">
                                <Form.Label>Food Preferences</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="food_preferences" value={formData.food_preferances} onChange={(e) => onFormChange(e)}>
                                    <option>Choose...</option>
                                    <option>Meat Eater</option>
                                    <option>Pescatarian</option>
                                    <option>Vegetarian</option>
                                    <option>Vegan</option>
                                    <option>Gluten-Free</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridStyle">
                                <Form.Label>Travel Style</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." name="travel_style"value={formData.travel_style} onChange={(e) => onFormChange(e)}>
                                    <option>Choose...</option>
                                    <option>Leisurely</option>
                                    <option>Adventure</option>
                                    <option>Sightseeing</option>
                                    <option>Foodie</option>
                                    <option>Live Like a Local</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Upload a Profile Picture</Form.File.Label>
                            <Form.File.Input name="image" onChange={(e) => onFormChange(e)} />
                            </Form.File>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        <Button style={{float: "right"}} variant="primary" onClick={() => history.push(`/profile/${id}`)}>
                            Cancel
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default EditProfile;