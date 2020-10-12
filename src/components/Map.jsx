import React from "react";
import Iframe from "react-iframe";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    sendMail(event) {
        let formData = new FormData();
        formData.append("text", this.state.value);
        fetch("http://dip.buzina42.beget.tech/sendMail", {
            method: "POST",
            body: formData
        });
        event.preventDefault();
    }

    render() {
        return <div>
            <div className="map">
                <Iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abbf15d5074614777ccf4241110c25a397262511da0db17546edbfd3aaa432c7e&amp;source=constructor"
                    width="100%"
                    height="600"
                    frameBorder="0"/>
                <div className="map-contact-detalis">
                    <div className="open-time">
                        <h5>Рабочее время:</h5>
                        <ul>
                            <li>Будни: <span>09:30 - 20:00</span></li>
                            <li>Выходные: <span>11:00 - 17:00</span></li>
                            <li>Праздничные дни: <span>не работаю;)</span></li>
                        </ul>
                    </div>
                    <div className="map-contact-form">
                        <h5>Заявка</h5>
                        <form action="#" onSubmit={this.sendMail}>
                            <input type="text" placeholder="Имя"/>
                            <input type="text" className="phone" placeholder="Номер телефона"/>
                            <textarea placeholder="Ваш текст" value={this.state.value} onChange={this.handleChange}/>
                            <button type="submit" className="site-btn">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Map;