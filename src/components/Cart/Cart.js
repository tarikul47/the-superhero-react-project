import React from 'react';
import CartInfo from '../CartInfo/CartInfo';
import './Cart.css'
const Cart = (props) => {
console.log(props.cart);
let total = 0;
for(const donar of props.cart){
    total += donar.donations;
}
return (
    <div className="col-lg-3">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">{props.cart.length}</span>
        </h4>
        <ul className="list-group mb-3">
            {
                props.cart.map(donar => <CartInfo key={donar.profession} donar={donar}></CartInfo>)
            }
            <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
            </li>
        </ul>
        <button className="front__text-hover">Deposit Donation</button>
    </div>
);
};

export default Cart;