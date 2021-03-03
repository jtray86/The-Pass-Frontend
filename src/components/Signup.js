import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Signup(){
    return(
        <div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Button type="submit">Submit form</Button>
            </Form>
            
        </div>
    )
}

export default Signup