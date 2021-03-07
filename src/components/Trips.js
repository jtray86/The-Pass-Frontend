// import Card from 'react-bootstrap/Card'
import Trip from "./Trip";
// import CardDeck from 'react-bootstrap/CardDeck'
// import data from "../data"

function Trips({ tripsData }){


    const tripCard = tripsData.map((trip) => {
        return <Trip 
            key={trip.id} trip={trip}
        />
    });

    return(
        <div id='cardContainer'>
            {tripCard}
        </div>
    )
}

export default Trips