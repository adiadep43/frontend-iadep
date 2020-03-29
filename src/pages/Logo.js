import React from 'react';
import { Link } from 'react-router-dom';
import '../global.css';
import logo from './../asset/menuIcon.png';
import logoFace from './../asset/facebook.png';
import logoTwit from './../asset/twitter.png';
import logoLink from './../asset/linkedin.png';

export default function Logo(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }
    return(
        <Link to="/" className="logo"><img src={logo} /></Link>
)}