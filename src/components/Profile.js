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

    const users =[
        {
            id: 1,
            username: "Jtray86",
            image:"https://www.telegraph.co.uk/content/dam/fashion/2019/02/07/GettyImages-824296158_trans_NvBQzQNjv4BqdsqbsZL_ZhuUNVNgtppgSVfvYIpE8WooDS_kmLGJk-A.jpg",
            email: "jenniferetracy@gmail.com",
            bio: "dkjbfiwbsdf dksjbfvisdbv ksdjbcskdbvco sdkc ksdbv h sdfk bskxb ikzj  kdbxik. kdsb cksd cvskd cvksk bc sv.",
            activity_Level: "medium",
            food_preferances: "Meat Eater",
            travel_style: "sight seeing",
            Favorate_trip: "ofodihpowdifhi oidbncijsbdciu ojdncjsbdivb sjdcoshdokn ojdsncosbdcvbsd isdjbciosbdo."

        }
    ]
    const userInfo = users.map((user) => {
        return(
            <ProfileInfo 
            key ={user.id}
            user ={user}
            />
        )
    })

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
                         {userInfo} 
                    </Col>

                    <Col md={{ span: 4, offset: 1 }}>
                        {tripData}
                    </Col>
                </Row>
            </Container>
    )
}

export default Profile