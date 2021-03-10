// import Card from 'react-bootstrap/Card'
import Trip from "./Trip";
import CardColumns from 'react-bootstrap/CardColumns'

function Trips({ tripsData, currentUser }){

    const showTrips = tripsData.filter((trip) => trip.owner.presentation !== currentUser.presentation);
    const availableTrips = showTrips.filter((trip) => trip.traveler === null)
    const tripCard = availableTrips.map((trip) => {
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