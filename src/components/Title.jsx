import React from "react";
import {NavLink} from "react-bootstrap";

const Title = (props)=> {
    return <section className="breadcrumb-section set-bg spad" style={{ backgroundImage: `url(${require("./img/about-bread.jpg")})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-text">
                        <h2>{props.h2}</h2>
                        <div className="breadcrumb-controls">
                            <NavLink to=""><i className="fa fa-home"></i>Главная</NavLink>
                            <span>{props.h2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Title;