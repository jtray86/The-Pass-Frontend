import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

function Header(){
    const history = useHistory();

    function handleSignup(){
        history.push("/signup")
    }
    return(
    <Jumbotron>
        <h1>Hello, world!</h1>
            <p>
                <Button variant="primary"onClick={handleSignup}>Signup</Button>
                <Button variant="primary">Sign-in</Button>
            </p>
    </Jumbotron>
    )
}

export default Header