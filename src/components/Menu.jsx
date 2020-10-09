import React from "react";

const Menu = ()=>{
    return <div>
        <div id="preloder">
            <div className="loader"/>
        </div>
        <div>
            <header className="header-section">
                <div className="container-fluid">
                    <div className="logo">
                        <a href="/public/index.html">
                            <img src={require('./img/logo.png')} alt="логотип не загрузился"/>
                        </a>
                    </div>
                    <div className="top-social">
                        <a href="#"><i className="fa fa-pinterest-p"/></a>
                        <a href="#"><i className="fa fa-linkedin"/></a>
                        <a href="#"><i className="fa fa-pinterest-p"/></a>
                        <a href="#"><i className="fa fa-youtube-play"/></a>
                        <a href="#"><i className="fa fa-instagram"/></a>
                    </div>
                    <div className="container">
                        <div className="nav-menu">
                            <nav className="mainmenu mobile-menu">
                                <ul>
                                    <li className="active"><a href="/public/index.html">Home</a></li>
                                    <li><a href="/public/about-us.html">About us</a></li>
                                    <li><a href="/public/schedule.html">Schedule</a></li>
                                    <li><a href="/public/gallery.html">Gallery</a></li>
                                    <li><a href="/public/blog.html">Blog</a>
                                        <ul className="dropdown">
                                            <a href="/public/about-us.html">About Us</a>
                                            <a href="/public/blog-single.html">Blog Details</a>
                                        </ul>
                                    </li>
                                    <li><a href="/public/contact.html">Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"/>
                </div>
            </header>
        </div>
    </div>
}
export default Menu;