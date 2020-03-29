import React from 'react';
import { Link } from 'react-router-dom';
import '../global.css';
import logo from './../asset/menuIcon.png';
import logoFace from './../asset/facebook.png';
import logoTwit from './../asset/twitter.png';
import logoLink from './../asset/linkedin.png';

export default function Navigate(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }
    return(
        <div id="navigation">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/radio">Rádio</Link></li>
            <li><Link to="/acao-social">Ação Social</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/contato">Contatos</Link></li>
        </ul>
    </div>
)}