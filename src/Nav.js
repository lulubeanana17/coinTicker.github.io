import React from 'react';
import App from './App';
import About from './About';
import Detail from './Detail';
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <BrowserRouter>
          <div className="navbar">
            <h1><Link to={process.env.PUBLIC_URL + "/"} className="homeTitle">The Coins 100</Link></h1>
            <div><Link to={process.env.PUBLIC_URL + "/about"} className="aboutTitle">About</Link></div>
          </div>
          
          <div className="info">
            <Routes>
            <Route exact={true} path={process.env.PUBLIC_URL + "/" } element={<App/>} />
            <Route path={process.env.PUBLIC_URL + "/coin/:id"} element={<Detail/>} />
            <Route path={process.env.PUBLIC_URL + "/about"} element={<About/>} />
            </Routes>
          </div>
        </BrowserRouter>
    );
  }