import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

import { useHistory } from "react-router-dom";
import { useState } from 'react'

function Signup({ setCurrentUser }){

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        presentation: ""
    });
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    
    function handleChange(e) {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        // TODO: sign up as a new user
        // request => POST /signup
        fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
            return response.json();
            } else {
            return response.json().then((data) => {
                throw data;
            });
            }
        })
        .then((data) => {
            // set the user in state
            setCurrentUser(data.user);
            // save the token!
            localStorage.setItem("token", data.token);
            // redirect
            history.push(`/profile/${data.id}`);
        })
        .catch((data) => {
            setErrors(data.errors);
        });
    }
    
    const { username, email, password } = formData;

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username" 
                        placeholder="Username"
                        name="username" 
                        value={username}
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        value={email}
                        onChange={handleChange}  
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="password"
                        name="password" 
                        value={password}
                        onChange={handleChange}  
                    />
                </Form.Group>
                <Form.Group controlId="formGridActivity">
                    <Form.Label>Gender Presentation</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." name="presentation" value={formData.presentation} onChange={(e) => handleChange(e)}>
                        <option>Choose...</option>
                        <option>Female</option>
                        <option>Male</option>
                    </Form.Control>
                </Form.Group>
                    {/* {errors.map((error) => (
                        <p key={error} style={{ color: "red" }}>
                        {error}
                        </p>
                    ))} */}
                <Button type="submit">Sign-up!</Button>
            </Form>
        </Container>
    )
};

export default Signup