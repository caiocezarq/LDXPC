import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*Importando barras de navegação*/
import { NavigationBar } from './components/navi/NavigationBar';
import Sidebar from './components/navi/Sidebar';

/*Importando paginas*/
import { Home } from './components/pages/Home';
import { Addven } from './components/pages/Addven';
import { Addcli } from './components/pages/Addcli';
import { Clientes } from './components/pages/Clientes';


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Addven" component={Addven} />
          <Route path="/Addcli" component={Addcli} />
          <Route path="/Clientes" component={Clientes} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
