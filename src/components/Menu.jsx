import React from "react";
import {NavLink} from "react-router-dom";

const Menu = ()=>{
    return <div>
        <header className="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="nav-menu col-sm-8">
                        <nav className="mainmenu mobile-menu">
                            <ul>
                                <li><NavLink exact to="/">Главная</NavLink></li>
                                <li><NavLink to="/about_me">Обо мне</NavLink></li>
                                <li><NavLink to="/schedule">Расписание</NavLink></li>
                                <li><NavLink to="/gallery">Галерея</NavLink></li>
                                <li><NavLink to="/blog">Блог</NavLink>
                                    <ul className="dropdown">
                                        <NavLink to="/about_me">Обо мне</NavLink>
                                        <NavLink to="/blog_more">Блог Подробнее</NavLink>
                                    </ul>
                                </li>
                                <li><NavLink to="/contact">Контакты</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="top-social col-sm-4">
                        <NavLink to=""><i className="fa fa-pinterest-p"/></NavLink>
                        <NavLink to=""><i className="fa fa-linkedin"/></NavLink>
                        <NavLink to=""><i className="fa fa-youtube-play"/></NavLink>
                        <NavLink to=""><i className="fa fa-instagram"/></NavLink>
                    </div>
                </div>
            </div>
        </header>
    </div>
}
export default Menu;