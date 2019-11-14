import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import HomePaciente from './pages/HomePaciente';
import Paciente from './pages/Paciente';
import HomeMedico from './pages/HomeMedico';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/homepaciente" component={HomePaciente} />
        <Route path="/paciente" component={Paciente} />
        <Route path="/medico" component={HomeMedico} />
      </Switch>
    </BrowserRouter>
  );
}