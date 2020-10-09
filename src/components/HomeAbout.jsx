import React from "react";

const HomeAbout = ()=>{
    return <div>
        <section className="home-about spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h2>WELCOME TO CROSSFIT</h2>
                            <p className="short-details">CrossFit is a cutting-edge functional fitness system that can
                                help
                                everyday men.</p>
                            <p className="long-details">Success isn’t really that difficult. There is a significant
                                portion of
                                the population here in North America, that actually want and need success to be hard!
                                For
                                those of you who are serious about having more, doing more, giving more and being
                                more.</p>
                            <a href="#" className="primary-btn about-btn">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={require('./img/home-about.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default HomeAbout;