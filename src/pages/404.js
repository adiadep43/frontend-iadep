import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import '../global.css';



import ContBar from './ContBar';
import Navigate from './Navigate';

export default function RadioPage(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }

    

    return(
        <>
        <section className="banner" id="sec">
        <header>
            <Logo/>
            <div id="toggle" onClick={toggle}></div>
        </header>
        <div className="content">
            <br/>
            <br/>
            <h2>404 Pagina Não Encontrada</h2>
            <br/>
            <Link to="/"></Link>
            <br/>
                
        </div>
    </section>
    
    <Navigate />
        </>
    );
}
