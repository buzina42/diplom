import React from "react";

const Video = ()=>{
    return <div>
        <section className="video-section set-bg" style={{ backgroundImage: `url(${require("./img/video-bg.jpg")})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="video-text">
                            <h2>Gym In Dowtown New York</h2>
                            <a href="https://www.youtube.com/watch?v=X_9VoqR5ojM" className="play-btn video-popup">
                                <i className="fa fa-play"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Video;