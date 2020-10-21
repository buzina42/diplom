import React from "react";
import {NavLink} from "react-router-dom";

const ClassesItem = ()=>{
    return <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <div className="classes-item set-bg" style={{ backgroundImage: `url(${require("./img/classes/class-1.jpg")})` }}>
                    <h4>Crossfit Level 1</h4>
                    <p>Sufferers around the globe will be happy to hear that there are sleep apnea remedies.</p>
                    <li><NavLink to="#" className="primary-btn class-btn">Read More</NavLink></li>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="classes-item set-bg" style={{ backgroundImage: `url(${require("./img/classes/class-2.jpg")})` }}>
                    <h4>BootCamp</h4>
                    <p>The oil, also called linseed oil, has many industrial uses – it is an important
                        ingredient
                    </p>
                    <li><NavLink to="#" className="primary-btn class-btn">Read More</NavLink></li>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="classes-item set-bg" style={{ backgroundImage: `url(${require("./img/classes/class-3.jpg")})` }}>
                    <h4>Energy Blast</h4>
                    <p>It is a very common occurrence like cold or fever depending upon your lifestyle. </p>
                    <li><NavLink to="#" className="primary-btn class-btn">Read More</NavLink></li>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="classes-item set-bg" style={{ backgroundImage: `url(${require("./img/classes/class-4.jpg")})` }}>
                    <h4>CLASSIC BODY BALANCE</h4>
                    <p>The procedure is usually a preferred alternative to photorefractive keratectomy,</p>
                    <li><NavLink to="#" className="primary-btn class-btn">Read More</NavLink></li>
                </div>
            </div>
        </div>
    </div>
}
export default ClassesItem;