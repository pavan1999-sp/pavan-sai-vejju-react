
import React,{useEffect,useState} from 'react';
import './index.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import About from  './about'
import Contact from './contact';
import Hook from './hook';
import axios from 'axios';
import Test from './test';


const Home=()=>{

        return (
    <Router>
            <div id="container">
                <div id="menu-bar">
                <nav className="navbar navbar-expand-sm bg-info navbar-light">

  <Link className="navbar-brand" to="/">My React APP</Link>
  

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/Hook">Hook</Link>
    </li>
  </ul>
</nav>
                </div>
                <div id="content">
                
           <Route path="/" exact component={Test} ></Route>  
           <Route path="/contact" component={Contact}></Route>
           <Route path="/about" component={About}></Route>
           <Route path="/Hook" component={Hook}></Route>
                </div>


 
            </div>
    </Router>
    

 
        )
    }

export default Home;
        
        
