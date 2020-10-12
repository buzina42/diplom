import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import HomeAbout from "./components/HomeAbout";
import Classes from "./components/Classes";
import Classtime from "./components/Classtime";
import Price from "./components/Price";
import ChooseUs from "./components/ChooseUs";
import Video from "./components/Video";
import Blog from "./components/Blog";
import GetStarted from "./components/GetStarted";
import Map from "./components/Map";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Title from "./components/Title";
import ClassesItem from "./components/ClassesItem";
import Preloder from "./components/Preloder";
import Gallery from "./components/Gallery";
import AboutMe from "./components/AboutMe";
import Reviews from "./components/Reviews";
import RoadMap from "./components/RoadMap";
import Contact from "./components/Contact";
import BlogMore from "./components/BlogMore";



function App(props) {
  return (
      <div>
        <BrowserRouter>
          <Preloder/>
          <Menu/>
          <Route exact path="" render={()=> {
            return <div>
              <HomeAbout/>
              <Classes/>
              <ClassesItem/>
              <Classtime/>
              <Price getArticles={props.getArticles} getArticle={props.getArticle}/>
              <ChooseUs/>
              <Video/>
              <GetStarted/>
              <Map/>
            </div>
          }}/>
          <Route exact path="/schedule" render={()=>{
            return <div>
              <Title h2={"Расписание"}/>
              <Classtime/>
              <Classes/>
              <ClassesItem/>
              <ChooseUs/>
              <GetStarted/>
            </div>
          }}/>
          <Route exact path="/blog" render={()=>{
            return <div>
              <Title h2={"Блог"}/>
              <Blog/>
              <GetStarted/>
            </div>
          }}/>
          <Route exact path="/gallery" render={()=>{
            return <div>
              <Title h2={"Галерея"}/>
              <Gallery/>
              <GetStarted/>
            </div>
          }}/>
          <Route exact path="/about_me" render={()=>{
            return <div>
              <Title h2={"Обо мне"}/>
              <AboutMe/>
              <Reviews/>
              <GetStarted/>
            </div>
          }}/>
          <Route exact path="/contact" render={()=>{
            return <div>
                <Title h2={"Контакты"}/>
                <RoadMap/>
                <Contact/>
                <GetStarted/>
            </div>
          }}/>
          <Route exact path="/blog_more" render={()=>{
            return <div>
              <Title h2={"Блог подробнее"}/>
              <BlogMore/>
              <GetStarted/>
            </div>
          }}/>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
