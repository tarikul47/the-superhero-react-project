import React from 'react';
import './CartInfo.css';
const CartInfo = (props) => {
    //console.log(props.donar);
    // destructuring 
    const {name, city, donations} = props.donar;
    return (
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <div style={{textAlign:'left'}}>
                <h6 className="my-0">{name}</h6>
                <small className="text-muted">Location: {city}</small>
            </div>
            <span className="text-muted">${donations}</span>
        </li>
    );
};

export default CartInfo;