import React from "react";
import Iframe from "react-iframe";

const RoadMap = ()=> {
    return <div>
        <div className="contact-map">
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d188618.51311104256!2d-71.236572!3d42.381647!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1576756626784!5m2!1sen!2sbd"
                height="530"
                width="100%"
                styles={{border: "0"}}
                allowFullScreen=""/>
            <div className="map-hover">
                <h5>New York</h5>
                <ul>
                    <li>Weekdays: 10.00 - 23.00</li>
                    <li>Saturday: 10.00 - 23.00</li>
                    <li>Sunday: Close</li>
                </ul>
                <i className="icon_pin"></i>
            </div>
        </div>
    </div>
}
export default RoadMap;