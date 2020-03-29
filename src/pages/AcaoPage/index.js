import React, { Component } from 'react';
import './style.css';
import ContBar from './../ContBar';
import Logo from './../Logo';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Navigate from './../Navigate';

var images = [
    'https://drive.google.com/uc?id=1Yl_oMoA4v86oJrBw4JfZRhbvyu0eeWDt',
    'https://drive.google.com/uc?id=19y2hrjdTgr47tVx1PAuL96OyeTwQ1VJf',
    'https://drive.google.com/uc?id=1RgwcpVGaXuzICuMyTz2wuiZN75JOUv1c',
    'https://drive.google.com/uc?id=1WNzaL-rG9kHnbQXOBC2nucy2IntP98tm',
    'https://drive.google.com/uc?id=1w7mS8CG5X_bIbP5wf0Oc6Gr6eso_AWI_',
    'https://drive.google.com/uc?id=1M3xEKRWFNLJoeY1dxv0nUo_QIK-iD02K'
  ];

  export default class AcaoPage extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
      }
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
            <div className="galery">
                <img src={images[0]} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                <img src={images[1]} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                <img src={images[2]} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                <img src={images[3]} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                <img src={images[4]} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                <img src={images[5]} onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />

                {this.state.isOpen && (
                      <Lightbox
                        mainSrc={images[this.state.photoIndex]}
                        nextSrc={images[(this.state.photoIndex + 1) % images.length]}
                        prevSrc={images[(this.state.photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (this.state.photoIndex + 1) % images.length,
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