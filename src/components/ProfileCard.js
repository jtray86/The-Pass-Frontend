import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns'

import { useHistory } from "react-router-dom";

function ProfileCard({ user }){

    const {
        id,
        username,
        age,
        presentation,
        name,
        image,
        email,
        bio, 
        activity_level,
        food_preferances,
        travel_style,
        favorite_trip
        } = user

        const history = useHistory();

    return(
        <CardColumns>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <img style={{ width: '4rem', float: 'right', border: 'solid .1px lightgray' }}src={image}/>
                    <Card.Title >{username}</Card.Title>
                    <Card.Text>
                        {bio}
                    </Card.Text>
                    {/* <Button onClick={() => history.push(`/trip/${id}`)} variant="primary">View Full Trip Details</Button> */}
                    <Button onClick={() => history.push(`/profile/${id}`)} variant="primary">View Profile Details</Button>
                </Card.Body>
            </Card>
        </CardColumns>
    )

}

export default ProfileCard