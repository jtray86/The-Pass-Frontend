import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'



import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { DateRange, DateRangePicker, Calendar, DefinedRange } from 'react-date-range';

function TripForm({ currentUser }){
    const history = useHistory();    
    const [dateRange, setDateRange] = useState([
        {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
        }
    ]);
    const [formData, setFormData] = useState(
        {
            name: "",
            city: "",
            country: "",
            start_date: "",
            end_date: "",
            description: "",
            image: "",
            user_id: currentUser.id
        }
    )

    // console.log(formData);

    // console.log(dateRange[0].startDate);
    // console.log(dateRange[0].endDate);
    

    function onFormChange(e) {
        const updatedForm = {...formData}
        updatedForm[e.target.name] = (e.target.value)
        
        setFormData(updatedForm)
    }

    function onSubmitClick(e) {
        e.preventDefault();
        const updateForm = {...formData}
        updateForm.start_date = (dateRange[0].startDate)
        updateForm.end_date = (dateRange[0].endDate)
        
        setFormData(updateForm)
        
        handleTripSubmit();
    }

    function handleTripSubmit() {
        console.log(formData);
        const token = localStorage.getItem("token");
            if (token) {
            fetch("http://localhost:3000/newtrip", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
                })
                .then((r) => r.json())
                .then((trip) => {
                console.log(trip);
                // history.push(`/profile/${user.id}`); <-- should go to trips#show page for new trip
                });
            }
    }

    return(
        <Container>
                <h1>Add a New Trip</h1>
                <Form onSubmit={onSubmitClick}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" name="name" value={formData.name} onChange={(e) => onFormChange(e)}  />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAge">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="city" name="city" value={formData.city} onChange={(e) => onFormChange(e)} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridBio">
                            <Form.Label>Country</Form.Label>
                            <Form.Control name="country" value={formData.country} onChange={(e) => onFormChange(e)} />
                        </Form.Group>

                        <Form.Group controlId="formGridFavoriteTrip">
                            <Form.Label>Describe your trip plans:</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={(e) => onFormChange(e)} />
                        </Form.Group>
                        
                        <Col sm={12}>
                            <div style={{ "text-align": "center" }}>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDateRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dateRange}
                                />
                            </div>
                        </Col>

                        <Form.Group id="formGridImage">
                            {/* <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Upload a Trip Avatar</Form.File.Label>
                                <Form.File.Input name="image" onChange={(e) => onFormChange(e)} />
                            </Form.File> */}
                        <Form.Label>Add a Trip Image</Form.Label>
                            <Col sm={2}>
                                    <Image 
                                        src= {
                                            formData.image.length
                                            ? formData.image
                                            : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
                                        } 
                                        alt={formData.name} 
                                        thumbnail 
                                    />
                                </Col>
                            <Form.Control name="image" placeholder="https://" value={formData.image} onChange={(e) => onFormChange(e)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        <Button style={{float: "right"}} variant="primary" onClick={() => history.push(`/profile/${currentUser.id}`)}>
                            Cancel
                        </Button>
                    </Form>
        </Container>
    )
}
export default TripForm