import React from 'react';
import './Donar.css'

const Donar = (props) => {
    //console.log(props);
    // destructuring 
    const {name, profession, city, donations, src} = props.donar;
    return (
        <div className="col-lg-4 py-3">
                <div className="outer-div">
                    <div className="inner-div">
                        <div className="front">
                            <div className="front__bkg-photo"></div>
                            <div className="front__face-photo">
                                <img src={src} alt="profile" />
                            </div>
                            <div className="front__text">
                                <h3 className="front__text-header">{name}</h3>
                                <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>{city}
                                </p>

                                <div className="actions">
                                    <div className="meta-info">
                                        <h2>
                                            <span className="information">
                                                <span>{profession}</span><small>Profession</small>
                                            </span>
                                        </h2>
                                        <h2>
                                            <span className="information">
                                                <span>${donations}</span>
                                                <small>Donation</small>
                                            </span>
                                        </h2>
                                    </div>
                                    <button onClick={()=> props.eventHandle(props.donar)} className="front__text-hover">Add Donation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Donar;