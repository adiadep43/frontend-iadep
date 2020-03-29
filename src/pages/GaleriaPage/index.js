import React, { Component } from 'react';
import '../../global.css';
import './style.css';
import ContBar from './../ContBar';
import Logo from './../Logo';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Navigate from './../Navigate';

var images = [
      'https://drive.google.com/uc?id=1VvXadaoFCzO9bpAOAR6fSbsINq03rFG4',
      'https://drive.google.com/uc?id=191DYdERTE4omFXy6LEIDCO9iBLhygwog',
      'https://drive.google.com/uc?id=1ZTQERoy_Mm3647h6K7JXB5pMvTrZgC1e',
      'https://drive.google.com/uc?id=1nXjJWaD0y53ojQrafai0I_uP5yFCSShX',
      'https://drive.google.com/uc?id=1wB_rkXzx9P33HmLRgScdcWpfO0KtSbZc',
      'https://drive.google.com/uc?id=12srB0e9S_6Q7R0J1d9wURedzUAQ0SfWK',
      'https://drive.google.com/uc?id=1q4Ev6rKY0g6Z1kZB6SQrqpoFG3XSV5Uv',
      'https://drive.google.com/uc?id=1vdGvQr6DPbzdVwVqaJFOTsX1o8y82fdu',
      'https://drive.google.com/uc?id=1PLnGqVqGlKF_s17cXphHLQl7rdvqc99_',
      'https://drive.google.com/uc?id=1h1XMDjNBzA_mkQofPWD4URw4kiAYnRWD',
      'https://drive.google.com/uc?id=1ssKAuVS6nO0MQGHGrmrRIism6f54GpKQ',
      'https://drive.google.com/uc?id=1-SrdR85P-k-d6JVLlCz-rzMjVzRmG9FK',
      'https://drive.google.com/uc?id=1_9PTyF8fo3n19zXJgOfFPBYb_5NG9uvj',
      'https://drive.google.com/uc?id=1K2Vbn_nhWT4kZcs_1Vn_X7cirnQWefiW',
      'https://drive.google.com/uc?id=1ssZJTDp0NeiQ_xrdeDvWNpsecfb50r-o',
      'https://drive.google.com/uc?id=1e5LongCC4mUM3-XlmOlMysFABUh2-3XK',
      'https://drive.google.com/uc?id=1jsOvN1_gOwp3Q46E9jQG1hK_Ren_pvFe',
      'https://drive.google.com/uc?id=1b4d9f0R9eAo6UnOWU9qZCdH0d_t2P10K',
      'https://drive.google.com/uc?id=1a57-8njgPJCUjKYDurk8ycNLjhknm7eN',
      'https://drive.google.com/uc?id=1iB2uJY-Oy0TGSiFL6ZuN6jcGiGOG045A',
      'https://drive.google.com/uc?id=1M7OC0atPTOCQRgtjUEeKiZDYdiYJpZkS',
      'https://drive.google.com/uc?id=1SqflOaUmEfswBOeGl6MHIRo358tHyTin',
      'https://drive.google.com/uc?id=14BKB92ZXWzOgakBiHgFqwvWlYxDLbZMx',
      'https://drive.google.com/uc?id=1J-VMpcHOJeLUnIseDIytQEos-mI9FMam',
      'https://drive.google.com/uc?id=1jN7sGHnCAT819nmy0vt60-BDFhfCnpYr',
      'https://drive.google.com/uc?id=1GwllE4Ug4nIO50shFyHvh-uTvvalzLFY',
      'https://drive.google.com/uc?id=1HTVWsF0DYxQTtoR6rBO3FKUM_04-NAHy',
      'https://drive.google.com/uc?id=1Ukcm8HUR8S9PpzU7aFxgwk0ucfNbFmyx',
      'https://drive.google.com/uc?id=1DLWv4UB4ImhmnitboGIxkhzHd35cxqqu',
      'https://drive.google.com/uc?id=1VHCPttohbxnEPvljJPgWOy-3Ks9B4r4B',
      'https://drive.google.com/uc?id=1nLnDua3D0Y06v7PJxjh_cZOdMHjt4-1W',
      'https://drive.google.com/uc?id=1nocDF62krDRu0n4hKvM6LgsEe3bg8tSh',
      'https://drive.google.com/uc?id=1ja6r2mHh2FRtR6pAUhODxKNsSOEqRoNo',
      'https://drive.google.com/uc?id=1aTek_uAl0PY_qTfEiI_da6yLIi4h_4rX',
      'https://drive.google.com/uc?id=18FnCdrPTscriIomUidlc7P3rHARf14sR',
      'https://drive.google.com/uc?id=1HOMijXrrr6lSy7x83MY6YX2EElTYhebX',
      'https://drive.google.com/uc?id=1QqIH_1rmIriQH8hpabaFHPT699oBzAKG',
      'https://drive.google.com/uc?id=1Ihgf0l3_yqMzuNhArZOEp8tQx7bJUmWC',
      'https://drive.google.com/uc?id=1tHyz5DuZKy76zL0R2QuSZ_B3rRi_8I5v',
      'https://drive.google.com/uc?id=1Hx_HIb712r1-oZ1euYEHzmKiRS8__HX4',
      'https://drive.google.com/uc?id=1OAlrww1MxQNC0dr_OkkmUdROuM6g50B-',
      'https://drive.google.com/uc?id=1lhQ9Sts6V6CbEAeQSppp_GP4iZl6NIGU',
      'https://drive.google.com/uc?id=10IvtMdwEladseZ1OtzyT3B0buQmnmTH3',
      'https://drive.google.com/uc?id=1eFzi36wrh5moXxr80SkV6JVDqDPTyVIs',
      'https://drive.google.com/uc?id=1Qof79L_n-EX2hfFX0TrF7u9RE2qIl0Az',
      'https://drive.google.com/uc?id=1Cp6mDhmqF4QXIgJY4SvM5LE6gDa17QS_',
      'https://drive.google.com/uc?id=1eyWMPytlSc3RLnVpzViWLWdEBzoUvTVo',
      'https://drive.google.com/uc?id=1DbeCsueamCaw6QPRm1reW9mU4kOZrv-H',
      'https://drive.google.com/uc?id=1sI8xWz453jpaETZP9_5FpXaxJFWrdTHh',
      'https://drive.google.com/uc?id=1DewsHwl3TpELk6vx1NSMyzvYpRb3Wxh_',
      'https://drive.google.com/uc?id=1Bfxdyb5bh0-eSHQ55rIFpfHd4WO7K0sF',
      'https://drive.google.com/uc?id=1rWC3vtzAmn4hXwRzEJDyk1EueL5UFzJy',
      'https://drive.google.com/uc?id=1B0qppIJm3HZV1_n7OLXbr6_Q8zYCo8rx',
      'https://drive.google.com/uc?id=189A1_9WmjreKVkXmmH3liLMLpWlAQAi1',
      'https://drive.google.com/uc?id=1wxsWWtLF7qaqoeEu0n-sSaBy2hssyc5X',
    ];

export default class GaleriaPage extends Component {
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
            <h2>Galeria</h2>
            <br/>
            <div className="galery">

            <img src={images[0]} onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
            <img src={images[1]} onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
            <img src={images[2]} onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
            <img src={images[3]} onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
            <img src={images[4]} onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
            <img src={images[5]} onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
            <img src={images[6]} onClick={() => this.setState({ isOpen: true, photoIndex: 6 })} />
            <img src={images[7]} onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} />
            <img src={images[8]} onClick={() => this.setState({ isOpen: true, photoIndex: 8 })} />
            <img src={images[9]} onClick={() => this.setState({ isOpen: true, photoIndex: 9 })} />
            <img src={images[10]} onClick={() => this.setState({ isOpen: true, photoIndex: 10 })} />
            <img src={images[11]} onClick={() => this.setState({ isOpen: true, photoIndex: 11 })} />
            <img src={images[12]} onClick={() => this.setState({ isOpen: true, photoIndex: 12 })} />
            <img src={images[13]} onClick={() => this.setState({ isOpen: true, photoIndex: 13 })} />
            <img src={images[14]} onClick={() => this.setState({ isOpen: true, photoIndex: 14 })} />
            <img src={images[15]} onClick={() => this.setState({ isOpen: true, photoIndex: 15 })} />
            <img src={images[16]} onClick={() => this.setState({ isOpen: true, photoIndex: 16 })} />
            <img src={images[17]} onClick={() => this.setState({ isOpen: true, photoIndex: 17 })} />
            <img src={images[18]} onClick={() => this.setState({ isOpen: true, photoIndex: 18 })} />
            <img src={images[19]} onClick={() => this.setState({ isOpen: true, photoIndex: 19 })} />
            <img src={images[20]} onClick={() => this.setState({ isOpen: true, photoIndex: 20 })} />
            <img src={images[21]} onClick={() => this.setState({ isOpen: true, photoIndex: 21 })} />
            <img src={images[22]} onClick={() => this.setState({ isOpen: true, photoIndex: 22 })} />
            <img src={images[23]} onClick={() => this.setState({ isOpen: true, photoIndex: 23 })} />
            <img src={images[24]} onClick={() => this.setState({ isOpen: true, photoIndex: 24 })} />
            <img src={images[25]} onClick={() => this.setState({ isOpen: true, photoIndex: 25 })} />
            <img src={images[26]} onClick={() => this.setState({ isOpen: true, photoIndex: 26 })} />
            <img src={images[27]} onClick={() => this.setState({ isOpen: true, photoIndex: 27 })} />
            <img src={images[28]} onClick={() => this.setState({ isOpen: true, photoIndex: 28 })} />
            <img src={images[29]} onClick={() => this.setState({ isOpen: true, photoIndex: 29 })} />
            <img src={images[30]} onClick={() => this.setState({ isOpen: true, photoIndex: 30 })} />
            <img src={images[31]} onClick={() => this.setState({ isOpen: true, photoIndex: 31 })} />
            <img src={images[32]} onClick={() => this.setState({ isOpen: true, photoIndex: 32 })} />
            <img src={images[33]} onClick={() => this.setState({ isOpen: true, photoIndex: 33 })} />
            <img src={images[34]} onClick={() => this.setState({ isOpen: true, photoIndex: 34 })} />
            <img src={images[35]} onClick={() => this.setState({ isOpen: true, photoIndex: 35 })} />
            <img src={images[36]} onClick={() => this.setState({ isOpen: true, photoIndex: 36 })} />
            <img src={images[37]} onClick={() => this.setState({ isOpen: true, photoIndex: 37 })} />
            <img src={images[38]} onClick={() => this.setState({ isOpen: true, photoIndex: 38 })} />
            <img src={images[39]} onClick={() => this.setState({ isOpen: true, photoIndex: 39 })} />
            <img src={images[40]} onClick={() => this.setState({ isOpen: true, photoIndex: 40 })} />
            <img src={images[41]} onClick={() => this.setState({ isOpen: true, photoIndex: 41 })} />
            <img src={images[42]} onClick={() => this.setState({ isOpen: true, photoIndex: 42 })} />
            <img src={images[43]} onClick={() => this.setState({ isOpen: true, photoIndex: 43 })} />
            <img src={images[44]} onClick={() => this.setState({ isOpen: true, photoIndex: 44 })} />
            <img src={images[45]} onClick={() => this.setState({ isOpen: true, photoIndex: 45 })} />
            <img src={images[46]} onClick={() => this.setState({ isOpen: true, photoIndex: 46 })} />
            <img src={images[47]} onClick={() => this.setState({ isOpen: true, photoIndex: 47 })} />
            <img src={images[48]} onClick={() => this.setState({ isOpen: true, photoIndex: 48 })} />
            <img src={images[49]} onClick={() => this.setState({ isOpen: true, photoIndex: 49 })} />
            <img src={images[50]} onClick={() => this.setState({ isOpen: true, photoIndex: 50 })} />
            <img src={images[51]} onClick={() => this.setState({ isOpen: true, photoIndex: 51 })} />
            <img src={images[52]} onClick={() => this.setState({ isOpen: true, photoIndex: 52 })} />
            <img src={images[53]} onClick={() => this.setState({ isOpen: true, photoIndex: 53 })} />
            <img src={images[54]} onClick={() => this.setState({ isOpen: true, photoIndex: 54 })} />

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