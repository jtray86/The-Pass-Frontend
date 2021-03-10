import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import slide1 from '../assets/beach-vacation.jpg';
import slide2 from '../assets/couple.jpg';
import slide3 from '../assets/paris.jpg';

function Home(){
    return(
        <Container>
            <Carousel >
                <Carousel.Item interval={1000} style={{"max-height": "500px"}}>
                    <img
                    className="d-block w-100"
                    src={slide1}
                    alt="beach"
                    />
                    <Carousel.Caption style={{background: "#262626", opacity: "0.8" }}>
                    <h3>Find Your New Best Travel Friend</h3>
                    <p>Search for trips and connect with other passionate travelers</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} style={{"max-height": "500px"}} >
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Kenya"
                    />
                    <Carousel.Caption style={{background: "#262626", opacity: "0.8" }}>
                    <h3>Travel Safely</h3>
                    <p>Take advantage of straight-passing privelege and travel with confidence</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} style={{"max-height": "500px"}}>
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Paris"
                    />
                    <Carousel.Caption style={{background: "#262626", opacity: "0.8" }}>
                    <h3>See the World</h3>
                    <p>Only be limited by your imagination!</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        <br/>
        {/* <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://interpersonaledge.com/wp-content/uploads/2020/05/beach-vacation.jpg"
                    alt="beach"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://cdn.travelpulse.com/images/03abedf4-a957-df11-b491-006073e71405/670da518-ea2d-4328-87fb-7aeb8a81471b/630x355.jpg"
                    alt="Kenya"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg"
                    alt="Paris"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        <br />
        <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://interpersonaledge.com/wp-content/uploads/2020/05/beach-vacation.jpg"
                    alt="beach"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://cdn.travelpulse.com/images/03abedf4-a957-df11-b491-006073e71405/670da518-ea2d-4328-87fb-7aeb8a81471b/630x355.jpg"
                    alt="Kenya"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg"
                    alt="Paris"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel> */}
    </Container>
    )
}

export default Home