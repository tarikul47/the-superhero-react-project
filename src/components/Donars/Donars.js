import React from 'react';
import Donar from '../Donar/Donar';
import './Donars.css'

const Donars = (props) => {
    const donars = props.donars;
    //console.log(donars);
    //console.log(props.eventHandle);
return (
        <div className="row">
            {
                donars.map(donar => <Donar eventHandle={props.eventHandle} donar={donar} key={donar.id}></Donar>)
            }
            
        </div>
    );
};

export default Donars;