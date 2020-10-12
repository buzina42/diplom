import React from "react";
import Iframe from "react-iframe";

const RoadMap = ()=> {
    return <div>
        <div className="contact-map">
            <Iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Abbf15d5074614777ccf4241110c25a397262511da0db17546edbfd3aaa432c7e&amp;source=constructor"
                width="100%"
                height="600"
                frameBorder="0"/>
            <div className="map-hover">
                <h5>Москва</h5>
                <ul>
                    <li>Будни: 09:30 - 20:00</li>
                    <li>Выходные: 11:00 - 17:00</li>
                    <li>Праздничные дни: не работаю;)</li>
                </ul>
                <i className="icon_pin"></i>
            </div>
        </div>
    </div>
}
export default RoadMap;