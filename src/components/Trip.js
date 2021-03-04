import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns'


function Trip({ name, about, image }){

    return(
        <CardColumns>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <img style={{ width: '4rem', float: 'right', border: 'solid .1px lightgray' }}src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg"/>
                    <Card.Title >{name}</Card.Title>
                    
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg" />
                <Card.Body>
                    <img style={{ width: '4rem', float: 'right', border: 'solid .1px lightgray' }}src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg"/>
                    <Card.Title >Card Title</Card.Title>
                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg" />
                <Card.Body>
                    <img style={{ width: '4rem', float: 'right', border: 'solid .1px lightgray' }}src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg"/>
                    <Card.Title >Card Title</Card.Title>
                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg" />
                <Card.Body>
                    <img style={{ width: '4rem', float: 'right', border: 'solid .1px lightgray' }}src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg"/>
                    <Card.Title >Card Title</Card.Title>
                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.cia-france.com/media/1558/parcarou1_720x500.jpg" />
                <Card.Body>
                    <img style={{ width: '4rem', float: 'right', border: 'solid .1px lightgray' }}src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg"/>
                    <Card.Title >Card Title</Card.Title>
                    
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>

            </Card> */}

        </CardColumns>
    )
}
export default Trip



// https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg