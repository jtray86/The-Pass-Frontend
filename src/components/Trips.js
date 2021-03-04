import Card from 'react-bootstrap/Card'
import Trip from "./Trip";
import CardDeck from 'react-bootstrap/CardDeck'
import data from "../data" 


function Trips(){
    return(
        <div id='cardContainer'>
            <Trip/>
        </div>
    )
}

export default Trips