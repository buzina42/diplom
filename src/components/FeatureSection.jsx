import React from "react";

const FeatureSection = ()=>{
    return <div>
        <section className="feature-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-item set-bg" style={{ backgroundImage: `url(${require("./img/feature/feature-1.jpg")})` }}>
                            <h3>GROUP CLASSES</h3>
                            <p>The Sopranos manages to address the biases<br/> and benefits of therapy</p>
                            <a href="#" className="primary-btn f-btn">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-item set-bg" style={{ backgroundImage: `url(${require("./img/feature/feature-2.jpg")})` }}>
                            <h3>PERSONAL TRAINING</h3>
                            <p>Strep throat is very common during the flu<br/> seasons and it can be preceded</p>
                            <a href="#" className="primary-btn f-btn">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-item set-bg" style={{ backgroundImage: `url(${require("./img/feature/feature-3.jpg")})` }}>
                            <h3>Sports Nutrition</h3>
                            <p>A Human Being’s right to life implies his right to<br/> have the free and unrestricted
                            </p>
                            <a href="#" className="primary-btn f-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default FeatureSection;