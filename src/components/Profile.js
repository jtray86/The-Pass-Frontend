import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Trip from "./Trip";
import ProfileInfo from "./ProfileInfo";
// import data from "../data" 


function Profile(){

    const data = [
    {
        id: 1,
        name: "Yourseum",
        about: "Find great art",
        image: "https://i.imgur.com/yywQCoi.png"
    },
    {
        id: 2,
        name: "Spreddit",
        about: "A Global Community of Like Minded Humans Socially Distancing ",
        image: "https://i.imgur.com/cyZCpWs.png"
    },
    {
        id: 3,
        name: "snackATTACK",
        about: "It's Time to Discover",
        image: "https://i.imgur.com/VTJB4qy.png"
    }]

    const tripData = data.map((data) => {
        console.log(data);
        return (
            <Trip key={data.id} name={data.name} about={data.about} image={data.image}/>
        )
    });

    return (
            <Container>
                <Row>
                    <Col md={{ span: 7, offset: 0 }}>       
                        <ProfileInfo tripData={tripData} />
                    </Col>

                    <Col md={{ span: 4, offset: 1 }}>
                        {tripData}
                    </Col>
                </Row>
            </Container>
    )
}

export default Profile