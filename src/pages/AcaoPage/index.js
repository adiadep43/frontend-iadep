import React, { Component, useEffect } from 'react';
import './style.css';
import ContBar from './../../ContBar';
import Logo from './../../Logo';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import api2 from './../../../services/api2';


import Navigate from './../../Navigate';


  var acoes = [];

  export default class AcaoPage extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex1: 0,
          isOpen1: false,
        };
      }
    render(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }

    

 
    api2.get('posts').then(response => {
        response.data.map(img => {
            if(img.name.indexOf('acao_social') !== -1){
                acoes.push(img.url);
            }
        })
    })

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
              <h2>Acões Sociais <span>IADEP</span></h2>
              <br/>
              <br/>
              
              <img src={acoes[0]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 0 })} />
              <img src={acoes[1]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 1 })} />
              <img src={acoes[2]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 2 })} />
              <img src={acoes[3]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 3 })} />
              <img src={acoes[4]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 4 })} />
              <img src={acoes[5]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 5 })} />
              <img src={acoes[6]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 6 })} />
              <img src={acoes[7]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 7 })} />
              <img src={acoes[8]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 8 })} />
              <img src={acoes[9]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 9 })} />
              <img src={acoes[10]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 10 })} />
              <img src={acoes[11]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 11 })} />
              <img src={acoes[12]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 12 })} />
              <img src={acoes[13]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 13 })} />
              <img src={acoes[14]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 14 })} />
              <img src={acoes[15]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 15 })} />
              <img src={acoes[16]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 16 })} />
              <img src={acoes[17]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 17 })} />
              <img src={acoes[18]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 18 })} />
              <img src={acoes[19]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 19 })} />
              <img src={acoes[20]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 20 })} />
              <img src={acoes[21]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 21 })} />
              <img src={acoes[22]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 22 })} />
              <img src={acoes[23]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 23 })} />
              <img src={acoes[24]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 24 })} />
              <img src={acoes[25]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 25 })} />
              <img src={acoes[26]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 26 })} />
              <img src={acoes[27]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 27 })} />
              <img src={acoes[28]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 28 })} />
              <img src={acoes[29]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 29 })} />
              <img src={acoes[30]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 30 })} />
              <img src={acoes[31]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 31 })} />
              <img src={acoes[32]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 32 })} />
              <img src={acoes[33]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 33 })} />
              <img src={acoes[34]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 34 })} />
              <img src={acoes[35]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 35 })} />
              <img src={acoes[36]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 36 })} />
              <img src={acoes[37]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 37 })} />
              <img src={acoes[38]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 38 })} />
              <img src={acoes[39]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 39 })} />
              <img src={acoes[40]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 40 })} />
              <img src={acoes[41]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 41 })} />


                {this.state.isOpen1 && (
                      <Lightbox
                        mainSrc={acoes[this.state.photoIndex1]}
                        nextSrc={acoes[(this.state.photoIndex1 + 1) % acoes.length]}
                        prevSrc={acoes[(this.state.photoIndex1 + acoes.length - 1) % acoes.length]}
                        onCloseRequest={() => this.setState({ isOpen1: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex1: (this.state.photoIndex1 + acoes.length - 1) % acoes.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex1: (this.state.photoIndex1 + 1) % acoes.length,
                          })
                        }
                      />
                    )}
            
            </div>
            <ContBar/>
        </div>
    </section>
    <Navigate />
    </>
    );
}
}