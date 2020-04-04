import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RadioPage from './pages/RadioPage';
import AcaoPage from './pages/AcaoPage';
import GaleriaPage from './pages/GaleriaPage';
import ContatoPage from './pages/ContatoPage';
import LivePage from './pages/LivePage';
import ConfigPage from './pages/ConfigPage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/radio' component={RadioPage} />
                <Route path='/acao-social' component={AcaoPage} />
                <Route path='/galeria' component={GaleriaPage} />
                <Route path='/contato' component={ContatoPage} />
                <Route path='/live' component={LivePage} />
                <Route path='/config' component={ConfigPage} />
            </Switch>
        </BrowserRouter>
    )
}