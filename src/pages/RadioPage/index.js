import React from 'react';
import Logo from './../Logo';
import { FiPlay, FiPause } from 'react-icons/fi';
import { IoMdPause, IoMdPlay } from 'react-icons/io';
import AudioPlayer from 'react-modular-audio-player';


import './style.css';

import ContBar from './../ContBar';
import Navigate from './../Navigate';

export default function RadioPage(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }
    let playlist = [
        { src: "http://www.radioideal.net:8102/stream",
          title: "Rádio Iadep",
          artist: "Ao Vivo" },
      ];
      let rearrangedPlayer = [
        {
          className: "tier-top",
          style: {margin: "0.3rem",color: '#FFF',},
          innerComponents: [
            { 
              type: "play",
              style: {width: "fit-content", color: '#FFF', filter: 'invert(1)', marginRight: '10px'}
            },
            {
                type: "name"
            },
          ]
        },
      ]
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
            <h2>Rádio IADEP</h2>
            <br/>
            <br/>
            
            <div>
                <h2>Ouça-nos pelo nosso Aplicativo!</h2>
                <br/>
                <img src='https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png' width='300px' />
            </div>
            <div id='radio'>
                <div id='rd'>
                <AudioPlayer 
                audioFiles={playlist}
                hideTime={true}
                hideSeeking={true}
                hideName={false}
                playIcon={'https://unpkg.com/ionicons@5.0.0/dist/svg/play-sharp.svg'}
                playHoverIcon={'https://unpkg.com/ionicons@5.0.0/dist/svg/play-sharp.svg'}
                pauseIcon={'https://unpkg.com/ionicons@5.0.0/dist/svg/pause-sharp.svg'}
                pauseHoverIcon={'https://unpkg.com/ionicons@5.0.0/dist/svg/pause-sharp.svg'}
                playerWidth="10em"
                fontSize="1.5rem"
                iconSize="2rem"
                rearrange={rearrangedPlayer}
                />
                </div>
                
            </div>
        </div>
    </section>
    
    <Navigate />
        </>
    );
}