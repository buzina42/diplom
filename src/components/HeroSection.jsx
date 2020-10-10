import React from "react";

const HeroSection = ()=>{
    return <div>
        <section className="hero-section">
            <div className="hero-items owl-carousel">
                <div className="single-hero-item set-bg" style={{ backgroundImage: `url(${require("./img/hero-slider/hero-1.jpg")})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-text">
                                    <h2>Join Us Now</h2>
                                    <h1>FITNESS & SPORT</h1>
                                    <a href="#" className="primary-btn">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-hero-item" style={{ backgroundImage: `url(${require("./img/hero-slider/hero-2.jpg")})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-text">
                                    <h2>Join Us Now</h2>
                                    <h1>FITNESS & SPORT</h1>
                                    <a href="#" className="primary-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-hero-item" style={{ backgroundImage: `url(${require("./img/hero-slider/hero-3.jpg")})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hero-text">
                                    <h2>Join Us Now</h2>
                                    <h1>FITNESS & SPORT</h1>
                                    <a href="#" className="primary-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default HeroSection;