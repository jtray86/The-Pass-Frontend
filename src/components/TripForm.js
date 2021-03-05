import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { DateRange, DateRangePicker, Calendar, DefinedRange } from 'react-date-range';

function TripForm(){
    const [state, setState] = useState([
        {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
        }
    ]);

    console.log(state)
    return(
        <div>
            
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />

        </div>
    )
}
export default TripForm