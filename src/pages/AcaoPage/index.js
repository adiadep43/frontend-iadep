import React, { Component, useEffect } from 'react';
import './style.css';
import ContBar from './../ContBar';
import Logo from './../Logo';
import Lightbox from 'react-image-lightbox';
import { Link } from 'react-router-dom';
import 'react-image-lightbox/style.css';

import Navigate from './../Navigate';


  var acoes = [
    "https://uploadiadep.s3.us-east-2.amazonaws.com/69fd71e572687bb25b6ced9e308cc304-acao_social%20%286%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5bd1d5c752911efb7001a91e89671672-missoes%20%2872%29.jpg"
  ];
  

  export default class AcaoPage extends Component{
    
    render(){
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
            <h2>Ação Social</h2>
            <br/>
            <br/>
            <div className="galery">
              
              <br/>
              <h2>Mão Amiga <span>IADEP</span></h2>
              <br/>
              <br/>
              <p>A Mão Amiga Iadep é um projeto social em que ajudamos os mais nessecitados e fazemos o ide do Senhor, e cumprimos a palavra visitar os orfãos e das viúvas! (Tiago 1:27)</p>
              <br/>
              <br/>

              <Link to='/acao-social/acoes'>
              <div style={{display: 'flex', alignItems: 'center'}} id='acao'>
                <img style={{zIndex: 1}} src={acoes[0]}/>
                <p>Ações Sociais</p>
              </div>
              </Link>
              <Link to='/acao-social/missoes'>
              <div style={{display: 'flex', alignItems: 'center'}} id='missoes'>
                <img style={{zIndex: 1}} src={acoes[1]}/>
                <p>Missões</p>
              </div>
              </Link>
              
              
            </div>
            <ContBar/>
        </div>
    </section>
    <Navigate />
    </>
    );
}
}