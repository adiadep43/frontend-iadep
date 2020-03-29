import React from 'react';
import { Link } from 'react-router-dom';
import '../global.css';
import logo from './../asset/menuIcon.png';
import logoFace from './../asset/facebook.png';
import logoTwit from './../asset/twitter.png';
import logoLink from './../asset/linkedin.png';

export default function ContBar(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }
    return(
        <ul className="sci">
            <li><a href="https://www.facebook.com/ad.evangelhoprimitivo.7"><img src={'https://unpkg.com/ionicons@5.0.0/dist/svg/logo-facebook.svg'}/></a></li>
            <li><a href="https://www.instagram.com/igrejaiadep/"><img src={'https://unpkg.com/ionicons@5.0.0/dist/svg/logo-instagram.svg'}/></a></li>
            <li><Link to="/radio"><img src={'https://unpkg.com/ionicons@5.0.0/dist/svg/radio-outline.svg'}/></Link></li>
        </ul>
)}