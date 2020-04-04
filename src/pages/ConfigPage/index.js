import React,{useState} from 'react';
import Logo from './../Logo';
import api from './../../services/api';

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
    const [url_live, setUrl] = useState('');

    async function handlerPut(e) {
      e.preventDefault();

      try {
        await api.put('live', {
          url_live,
          live
        });
        alert('Modificação Feita Com Sucesso!');
      } catch (err) {
        alert('Ocorreu um Erro Tente Novamente!');
        console.log(err);
      }
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
            <h2>Rádio IADEP</h2>
            <br/>
            <br/>
            
            <form onSubmit={handlerPut}>
                <p>live</p>
                <input type="checkbox" value={live} onChange={e => setLive(e.target.checked)} />
                <p>url da live</p>
                <input type="text" value={url_live} onChange={e => setUrl(e.target.value)} />
                <br/>
                <br/>
                <input type='submit' />
          </form>
                
        </div>
    </section>
    
    <Navigate />
        </>
    );
}
