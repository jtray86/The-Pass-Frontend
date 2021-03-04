import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditProfile({ currentUser }) {
    const {
        id,
        username,
        age,
        realname,
        image,
        email,
        bio, 
        activity_Level,
        food_preferances,
        travel_style,
        Favorate_trip
        } = currentUser

    const [formData, setFormData] = useState(
        {
            username: username,
            age: age,
            realname: realname,
            image: image,
            email: email,
            bio: bio,
            activity_Level: activity_Level,
            food_preferances: food_preferances,
            travel_style: travel_style,
            Favorate_trip: Favorate_trip
            }
    )

    const history = useHistory();

    console.log(formData);

    function onFormChange(e) {
        const updateForm = {...formData}
        updateForm[e.target.name] = (e.taget.value)
    }


    function handleProfileSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleProfileSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" value={formData.realname} onChange={(e) => onFormChange(e)}  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="age" value={formData.age} onChange={(e) => onFormChange(e)} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridBio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={3} value={formData.bio} onChange={(e) => onFormChange(e)} />
                        </Form.Group>

                        <Form.Group controlId="formGridFavoriteTrip">
                            <Form.Label>Tell us about your favorite trip </Form.Label>
                            <Form.Control as="textarea" rows={3} value={formData.Favorate_trip} onChange={(e) => onFormChange(e)} />
                        </Form.Group>

                        <Form.Row>
                            
                            <Form.Group as={Col} controlId="formGridActivity">
                                <Form.Label>Preferred Activity Level</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." value={formData.activity_Level} onChange={(e) => onFormChange(e)}>
                                    <option>Choose...</option>
                                    <option>Low (Short walking tours, dining out, etc.)</option>
                                    <option>Medium</option>
                                    <option>High ()</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridFood">
                                <Form.Label>Food Preferences</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." value={formData.food_preferances} onChange={(e) => onFormChange(e)}>
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
                                <Form.Control as="select" defaultValue="Choose..." value={formData.travel_style} onChange={(e) => onFormChange(e)}>
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
                            <Form.File.Input onChange={(e) => onFormChange(e)} />
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