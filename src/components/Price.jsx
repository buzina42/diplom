import React from "react";

const Price = ()=>{
    return <div>
        <section className="price-section spad set-bg" style={{ backgroundImage: `url(${require("./img/price-bg.jpg")})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>CHOOSE YOUR PRICING PLAN</h2>
                            <p>These reports started to surface when Congress was having hearings about the<br/>
                                painkiller, Vioxx. A Food and Drug Administration staff member.</p>
                        </div>
                        <div className="toggle-option">
                            <ul>
                                <li>Monthly</li>
                                <li>
                                    <label className="switch">
                                        <input type="checkbox" checked/>
                                        <span className="slider"/>
                                    </label>
                                </li>
                                <li>Years</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-price-plan">
                            <h4>Normal</h4>
                            <div className="price-plan">
                                <h2>55 <span>$</span></h2>
                                <p>Monthly</p>
                            </div>
                            <ul>
                                <li>Unlimited access to the gym</li>
                                <li>1 classes per week</li>
                                <li>FREE drinking package</li>
                                <li>1 Free personal training</li>
                            </ul>
                            <a href="#" className="primary-btn price-btn">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-price-plan">
                            <h4>Professional</h4>
                            <div className="price-plan">
                                <h2>95 <span>$</span></h2>
                                <p>Monthly</p>
                            </div>
                            <ul>
                                <li>Unlimited access to the gym</li>
                                <li>2 classes per week</li>
                                <li>FREE drinking package</li>
                                <li>2 Free personal training</li>
                            </ul>
                            <a href="#" className="primary-btn price-btn">Get Started</a>
                            <div className="tic-text">
                                <i className="fa fa-star"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-price-plan">
                            <h4>Advanced</h4>
                            <div className="price-plan">
                                <h2>165 <span>$</span></h2>
                                <p>Monthly</p>
                            </div>
                            <ul>
                                <li>Unlimited access to the gym</li>
                                <li>6 classes per week</li>
                                <li>FREE drinking package</li>
                                <li>5 Free personal training</li>
                            </ul>
                            <a href="#" className="primary-btn price-btn">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Price;