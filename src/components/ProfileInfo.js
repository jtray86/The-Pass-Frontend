import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Trip from "./Trip";

function ProfileInfo(){
    return(
        <Container>
            <Row>
                <Col sm={4}>IMAGE</Col>
                <Col sm={8}>
                BIO/ABOUT
                </Col>
                <Col sm={12}>TRAVEL STYLE</Col>
                <Col sm={12}>
                    <Trip />
                </Col>
            </Row>
        </Container>
    )
};

export default ProfileInfo;