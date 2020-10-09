import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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



function App() {
  return (
      <>
        <Menu/>
        <HeroSection/>
        <FeatureSection/>
        <HomeAbout/>
        <Classes/>
        <Classtime/>
        <Price/>
        <ChooseUs/>
        <Video/>
        <Blog/>
        <GetStarted/>
        <Map/>
        <Footer/>
      </>
  );
}

export default App;
