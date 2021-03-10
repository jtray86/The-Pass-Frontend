import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import logo from '../assets/ThePassLogo-transparent.png';

function Header({ setCurrentUser, currentUser, callGetOthersUseEffect }){
    
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

// Login functionality
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
                        history.push(`/profile/${data.user.id}`);
                        setLoginInfo({username:"", password:""});
                        handleClose();
                        setErrors([]);
                        // callGetOthersUseEffect(data.user);
                    })
                    .catch((data) => {
                        setErrors(data.errors);
                    });
    }

    function handleLogout() {
        setCurrentUser({
            username: "",
            age: "",
            realname: "",
            image: "https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg",
            email: "",
            bio: "", 
            activity_level: "",
            food_preferances: "",
            travel_style: "",
            Favorate_trip: ""
        });
        localStorage.removeItem("token");
        history.push('/');
    }
        
    const buttonLogic = 
        currentUser.username.length > 0 ? (
            <div>
                <Button style={{ margin: "2px", float: "right"}} variant="outline-info" onClick={handleLogout}>Logout</Button>
                <Button style={{ margin: "2px", float: "right"}} variant="outline-info" onClick={() => history.push(`/profile/${currentUser.id}`)}>Profile</Button>
                <Button style={{ "margin-left": "60px", float: "left", background: "lightgrey"}} size="lg" variant="outline-info" onClick={() => history.push(`/trips`)}>View All Trips</Button>
            </div>
        ) : (
            <div style={{ float: "right"}} >
                <Button style={{ margin: "2px"}} variant="secondary" onClick={handleSignup}>Signup</Button>
                <Button style={{ margin: "2px"}} variant="secondary" onClick={handleShow}>Sign-in</Button>
            </div>
        )
    


    return(
    <Jumbotron style={{ "background-image": "linear-gradient(white, powderblue)", "box-shadow": "0 5px 5px -2px lightgrey" }}>
        <img src={logo} alt="ThePassLogo"/>
            <p>
                {buttonLogic}
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