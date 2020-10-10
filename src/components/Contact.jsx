import React from "react";

const Contact = ()=> {
    return <div>
        <section className="contact-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact-info">
                            <h4>Information</h4>
                            <ul>
                                <li><i className="fa fa-phone"></i>(12)-100-100-100</li>
                                <li><i className="fa fa-envelope"></i>Info.colorlib@gmail.com</li>
                            </ul>
                        </div>
                        <div className="contact-address">
                            <h4>Address</h4>
                            <ul>
                                <li><i className="fa fa-map-marker"></i> Iris Watson, Mary land, United State., New York
                                    City
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                        <div className="contact-form">
                            <h4>Get in touch</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Message"></textarea>
                                        <button type="submit" className="c-btn">Send Message</button>
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
export default Contact;