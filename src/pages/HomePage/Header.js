import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';
import './style.css';
import ContBar from './../ContBar';
import Logo from './../Logo';

export default function Header(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }
    return(
        <section className="banner" id="sec">
            <header>
                <Logo/>
                <div id="toggle" onClick={toggle}></div>
            </header>
            <div className="content" style={{height: 455}}>
                <br/>
                <br/>
                <h2>Paz do Senhor,<br/>Somos a <span>Igreja IADEP</span></h2>
                <br/>
                <p>Forjada na oração e na comunhão entre os irmãos, o Ministério Igreja Atos do Evangelho Primitivo da Assembleia de Deus, nasceu em janeiro de 2018 com apenas três famílias disposta a ouvir e trabalhar para o Senhor Jesus, no dia 25 de fevereiro de 2018 foi inaugurada a primeira congregação do Ministério, saímos de singelas reuniões em uma garagem para uma Sede abençoada por Deus no bairro Bom Jardim. Desde então trabalhamos com ações sociais e evangelismo não só no Bom jardim, mas em vários outros bairros de Fortaleza.
                    <br/>
                    A cada dia vivemos os milagres do nosso Senhor Jesus!</p>
                <Link to="/galeria" id="a">Saiba Mais</Link>
                <br/>
                <Link to="/radio" id="ab">Ouvir a Rádio</Link>
                <ContBar/>
            </div>
        </section>
)}