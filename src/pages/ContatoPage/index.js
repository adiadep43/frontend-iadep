import React, { Component } from 'react';
import '../../global.css';
import Logo from './../Logo';
import Pix from './../../asset/pix.png';

import './style.css';

import ContBar from './../ContBar';
import Navigate from './../Navigate';

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      render() {
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
            <br/>
            <h2>Ajude a Obra!</h2>
            <br/>
            <h3 style={{
                paddingLeft: '20px',
                fontSize: '25px',
                color: '#8B0000'
            }}>Transferência</h3>
            <br/>
            <p style={{
                paddingLeft: '45px'
            }}>Banco: Banco do Brasil</p>
            <br/>
            <p style={{
                paddingLeft: '45px'
            }}>Agência: 3887-3</p>
            <br/>
            <p style={{
                paddingLeft: '45px'
            }}>Conta Corrente: 63204-0</p>
            <br/>
            <p style={{
                paddingLeft: '45px'
            }}>CNPJ: 36.295.623/0001-86</p>
            <br/>
            <h3 style={{
                paddingLeft: '20px',
                fontSize: '25px',
                color: '#8B0000'
            }}>Pix</h3>
            <br/>
            <p style={{
                paddingLeft: '45px'
            }}>Chave do Pix: 36.295.623/0001-86</p>
            <br/>
            <img src={Pix} style={{
                paddingLeft: '45px'
            }}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Contatos</h2>
            <br/>
            <br/>
            
            <form className="test-mailing">
    	<h2>Envie-nos Uma Mensagem!</h2>
    	<div>
            <br/>
            <br/>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Escreva Aqui!"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
        <br/>
    	<input type="button" id='btn' value="Enviar" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
            <ContBar/>
        </div>
    </section>
    <Navigate />
        </>
    );
      }
      handleChange(event) {
        this.setState({feedback: event.target.value})
      }
    
      handleSubmit (event) {
        const templateId = 'template_QNm1gCYC';
    
        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('O Email Foi Enviado Com Sucesso!');
            alert('O Email Foi Enviado Com Sucesso!');
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {
              console.error('O Email Não Foi Enviado Com Sucesso:', err);
              alert('O Email Não Foi Enviado Com Sucesso:', err);
            })
      }
}
