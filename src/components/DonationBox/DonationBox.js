import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Donars from '../Donars/Donars';
import './DonationBox.css'
const DonationBox = () => {
    // donar state
    const [ donars, setDonars] = useState([]);
    // cart state
    const [cart, setCart] = useState([]);
    // Donars data load here 
    useEffect(()=>{
        fetch('./donars.JSON')
        .then(response => response.json())
        .then(donars => setDonars(donars));
    },[]);
    // event handler 
    const eventHandler = (donar) =>{
        const newDonarsCart = [...cart, donar];
        setCart(newDonarsCart);
       // console.log(donar);
    }

return (
<main>
    <div className="container py-3">
        <div className="row">
            <div className="col-lg-9">
                    <Donars donars={donars} eventHandle={eventHandler}></Donars>
            </div>
            <Cart cart={cart}></Cart>
        </div>
    </div>
</main>
);
};

export default DonationBox;