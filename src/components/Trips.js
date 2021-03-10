// import Card from 'react-bootstrap/Card'
import Trip from "./Trip";
import CardColumns from 'react-bootstrap/CardColumns'

function Trips({ tripsData, currentUser }){

    const showTrips = tripsData.filter((trip) => trip.owner.presentation !== currentUser.presentation);

    const tripCard = showTrips.map((trip) => {
        return <Trip 
            key={trip.id} trip={trip}
        />
    });

    return(
        <CardColumns id='cardContainer'>
            {tripCard}
        </CardColumns>
    )
}

export default Trips