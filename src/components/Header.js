import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react'
import Form from 'react-bootstrap/Form'

function Header({setCurrentUser}){
    
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
                        console.log(response)
                        if (response.ok) {
                        return response.json();
                        } else {
                        return response.json().then((data) => {
                            throw data;
                        });
                        }
                    })
                    .then((data) => {
                        console.log(data)
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
    return(
    <Jumbotron>
        <h1>Hello, world!</h1>
            <p>
                <Button variant="primary"onClick={handleSignup}>Signup</Button>
                <Button variant="primary" onClick={handleShow}>Sign-in</Button>
                <Button variant="primary" onClick={handleLogout}>Logout</Button>
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
                            <Button variant="primary" type="submit">Log-in</Button>
                         </Form>   
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        
                        </Modal.Footer>
                    </Modal> 
            </p>
    </Jumbotron>
    )
}

export default Header