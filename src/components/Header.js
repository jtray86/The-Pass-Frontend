import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import Form from 'react-bootstrap/Form'

function Header({ setCurrentUser, currentUser }){
    
    const [show, setShow] = useState(false);
    const [loginInfo, setLoginInfo]= useState({username:"", password:""})
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleSignup(){
        history.push("/signup")
    }

    function handleChange(e) {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    }

    function handleSubmit(e){
        
        e.preventDefault()
            fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginInfo),
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
                        // redirect!
                        history.push(`/profile/${data.id}`);
                        handleClose()
                    })
                    .catch((data) => {
                        setErrors(data.errors);
            });
    }

    function handleLogout() {
        setCurrentUser(null);
        localStorage.removeItem("token");
        history.push('/');
    }
    
    console.log(localStorage);
    
    console.log(currentUser);

    const buttonLogic = 
        currentUser ? (
            <>
                <Button variant="warning" onClick={handleLogout}>Logout</Button>
                <Button variant="primary" onClick={() => history.push(`/profile/${currentUser.id}`)}>Profile</Button>
            </>
        ) : (
            <>
                <Button variant="danger" onClick={handleSignup}>Signup</Button>
                <Button variant="success" onClick={handleShow}>Sign-in</Button>
            </>
        )
    

    console.log(buttonLogic);

    return(
    <Jumbotron>
        <h1>Hello, world!</h1>
            <p>
                {buttonLogic}

                <Button variant="info" onClick={() => history.push("/")}>Home</Button>
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
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="username" name="username" placeholder="Enter Username" value={loginInfo.username} onChange ={(e) =>handleChange(e)}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Password" value={loginInfo.password} onChange ={(e) =>handleChange(e)}/>
                                    </Form.Group>
                                    {errors.map((error) => (
                                        <p key={error} style={{ color: "red" }}>
                                            {error}
                                        </p>
                                    ))}
                                    <Modal.Footer>
                                        <Button variant="primary" type="submit">Log-in</Button>                      
                                    </Modal.Footer>
                                </Form>   
                            </Modal.Body>
                    </Modal> 
            </p>
    </Jumbotron>
    )
}

export default Header