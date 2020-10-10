import React from "react";
import {NavLink} from "react-bootstrap";

const Menu = ()=>{
    return <div>
        <header className="header-section">
            <div className="container-fluid">
                <div className="logo">
                    <NavLink to="index"/>
                </div>
                <div className="top-social">
                    <NavLink to="#"><i className="fa fa-pinterest-p"/></NavLink>
                    <NavLink to="#"><i className="fa fa-linkedin"/></NavLink>
                    <NavLink to="#"><i className="fa fa-youtube-play"/></NavLink>
                    <NavLink to="#"><i className="fa fa-instagram"/></NavLink>
                </div>
                <div className="container col-sm-12">
                    <div className="nav-menu">
                        <nav className="mainmenu mobile-menu">
                            <ul>
                                <li><NavLink exact to="">Главная</NavLink></li>
                                <li><NavLink exact to="/public/about_me">Обо мне</NavLink></li>
                                <li><NavLink exact to="/public/schedule">Расписание</NavLink></li>
                                <li><NavLink exact to="/public/gallery">Галерея</NavLink></li>
                                <li><NavLink exact to="/public/blog">Блог</NavLink>
                                    <ul className="dropdown">
                                        <NavLink to="/public/about_me">Обо мне</NavLink>
                                        <NavLink to="/public/blog_more">Блог Подробнее</NavLink>
                                    </ul>
                                </li>
                                <li><NavLink to="/public/contact">Контакты</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div id="mobile-menu-wrap"/>
            </div>
        </header>
    </div>
}
export default Menu;