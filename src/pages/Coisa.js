import React, {useState, useEffect} from 'react';
import Logo from './Logo';

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
            <h2>Live IADEP</h2>
            <br/>
            <br/>
            
            <div>
              <iframe src="./../../public/sitemap.xml" width="300" height="300""/>
            </div>
                
        </div>
    </section>
    
    <Navigate />
        </>
    );
}
