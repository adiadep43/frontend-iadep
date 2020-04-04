import React, {useState, useEffect} from 'react';
import Logo from './../Logo';
import api from './../../services/api';
import Iframe from 'react-iframe';

import '../../global.css';



import ContBar from './../ContBar';
import Navigate from './../Navigate';

export default function RadioPage(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }

    const [live, setLive] = useState(false);
  const [url_live, setUrllive] = useState('');
   
    useEffect(() => {
      api.get('live').then(response => {
        const {0: live} = response.data;
        setLive(live.live);
        setUrllive(live.url_live);
      })
    }, [live.live])

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
            {!!live && (
                <Iframe url={url_live}
                style={{border: 'none'}}
                width="300%"
                height="500px"
                frameBorder='0'
                allowFullScreen='fullscreen'
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
            )}
            </div>
                
        </div>
    </section>
    
    <Navigate />
        </>
    );
}