import React from "react";
import {NavLink} from "react-router-dom";

const HomeAbout = ()=>{
    return <div>
        <section className="home-about spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h2>БЕГИ СО МНОЙ</h2>
                            <p className="short-details">Бег - это естественное физиологическое движение, которое приносит пользу с давних времен.</p>
                            <p className="long-details">Бег, с начала времен, стоит на страже вашего здоровья от чужих насильственных действий, ведь как известно, умеющий бегать ничего не боится.</p>
                            <NavLink to="/about_me" className="primary-btn about-btn">Подробнее</NavLink>
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