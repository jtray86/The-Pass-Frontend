import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


import { useHistory } from "react-router-dom";


function Trip({ trip }){
    const history = useHistory();
    
    const {
        id,
        name,
        city,
        country,
        start_date,
        end_date,
        description,
        image,
        owner
        } = trip

    return(

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <img style={{ width: '4rem', float: 'right', border: 'solid .1px lightgray' }} src={owner.image}/>
                        <Card.Title >{name}</Card.Title>
                        <Card.Title >{city}, {country}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                        <Button onClick={() => history.push(`/trip/${id}`)} variant="info">View Full Trip Details</Button>
                </Card.Body>
            </Card>
    
    )
}
export default Trip



// https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg