import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="text-center py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <h2>Orphanage Donation Management</h2>
                    <p>We are a charity supporting widows and orphans with a focus on sustainability, our programmes give support to the neediest around the world. Orphans in Need believe that every child, everywhere, has the right to a happy and healthy life. This means we work hard to find solutions that are sustainable.
                    </p>
                    <h3>Total Budget: 10000$</h3>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;