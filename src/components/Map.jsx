import React from "react";

const Map = ()=>{
    return <div>
        <div className="map">
            <iframe src="" height="590" style={{border: 0}} allowFullScreen=""/>
            <div className="map-contact-detalis">
                <div className="open-time">
                    <h5>Weekday:</h5>
                    <ul>
                        <li>Weekday: <span>06:30 - 11:00</span></li>
                        <li>Saturday: <span>07:00 - 22:00</span></li>
                        <li>Sunday: <span>09:00 - 18:00</span></li>
                    </ul>
                </div>
                <div className="map-contact-form">
                    <h5>Contact Us</h5>
                    <form action="#">
                        <input type="text" placeholder="Name"/>
                        <input type="text" className="phone" placeholder="Phone"/>
                        <textarea placeholder="Message"/>
                        <button type="submit" className="site-btn">Submit Now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Map;