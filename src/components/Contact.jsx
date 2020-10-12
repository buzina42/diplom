import React from 'react';

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.sendMail = this.sendMail.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    sendMail(event){
        let formData = new FormData();
        formData.append("text", this.state.value);
        fetch("http://dip.buzina42.beget.tech/sendMail",{
            method: "POST",
            body: formData
        });
        event.preventDefault();
    }
    render() {
        return <div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact-info">
                                <h4>Информация</h4>
                                <ul>
                                    <li><i className="fa fa-phone"></i>(12)-100-100-100</li>
                                    <li><i className="fa fa-envelope"></i>Info.colorlib@gmail.com</li>
                                </ul>
                            </div>
                            <div className="contact-address">
                                <h4>Геолокация</h4>
                                <ul>
                                    <li><i className="fa fa-map-marker"></i> Москва и Зеленоград
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <div className="contact-form">
                                <h4>Обратная связь</h4>
                                <form action="#" onSubmit={this.sendMail}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Имя"/>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" placeholder="Email"/>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Текст" value={this.state.value} onChange={this.handleChange}></textarea>
                                            <button type="submit" className="c-btn">Отправить</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}
export default Contact;