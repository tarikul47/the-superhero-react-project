import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="text-center py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <h2>Orphanage Donation Management</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorem saepe voluptate
                        commodinatus nesciunt, nostrum architecto possimus eius reiciendis. Vero eos tenetur deserunt
                        dolores
                    </p>
                    <h3>Total Budget: 10000$</h3>
                </div>
            </div>
        </div>
    </header>
    );
};

export default Header;