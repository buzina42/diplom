import React from "react";

const Blog = ()=>{
    return <div>
        <section className="blog-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <h2>From Our Blog</h2>
                            <p>List of all news and events that take place related to us</p>
                        </div>
                    </div>
                </div>
                <div className="row blog-gird">
                    <div className="grid-sizer"/>
                    <div className="col-lg-4 col-md-6 grid-item">
                        <div className="blog-item large-item set-bg" style={{ backgroundImage: `url(${require("./img/blog/blog-1.jpg")})` }}>
                            <a href="#" className="blog-text">
                                <div className="categories">Gym & Croosfit</div>
                                <h5>Many people sign up for affiliate programs</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item">
                        <div className="blog-item instagram-item">
                            <a href="#" className="instagram-text">
                                <div className="categories">Gym & Croosfit <i className="fa fa-instagram"/></div>
                                <h5>Follow Our Classes Gyming on Instagram # BodyBuilding # photo</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item">
                        <div className="blog-item small-item set-bg" style={{ backgroundImage: `url(${require("./img/blog/blog-2.jpg")})` }}>
                            <a href="#" className="blog-text">
                                <div className="categories">Gym & Croosfit</div>
                                <h5>Does Hydroderm Work</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item">
                        <div className="blog-item large-item xls-large set-bg" style={{ backgroundImage: `url(${require("./img/blog/blog-3.jpg")})` }}>
                            <a href="#" className="blog-text">
                                <div className="categories">Gym & Croosfit</div>
                                <h5>Many people sign up for affiliate programs</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item">
                        <div className="blog-item large-item set-bg" style={{ backgroundImage: `url(${require("./img/blog/blog-4.jpg")})` }}>
                            <a href="#" className="blog-text">
                                <div className="categories">Gym & Croosfit</div>
                                <h5>Many people sign up for affiliate programs</h5>
                            </a>
                            <div className="play-btn">
                                <a href="https://www.youtube.com/watch?v=X_9VoqR5ojM"
                                   className="play-in-btn video-popup">
                                    <i className="fa fa-play"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 grid-item">
                        <div className="blog-item small-item set-bg" style={{ backgroundImage: `url(${require("./img/blog/blog-5.jpg")})` }}>
                            <a href="#" className="blog-text">
                                <div className="categories">Gym & Croosfit</div>
                                <h5>Your Antibiotic One Day To 10 Day Options</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Blog;