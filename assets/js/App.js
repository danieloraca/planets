import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Items from './Components/Items';
import Home from './Components/Home';
import Planets from './Components/Planets';
import PlanetsAdd from "./Components/PlanetsAdd";

class App extends React.Component {
    render() {
        return(
        <Router>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/planets'} className="nav-link"> Planets </Link></li>
                    <li><a href={'/planets/add'}>Add Planet</a></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/planets' component={Planets} />
                </Switch>
            </div>
        </Router>
        );
    }
}

export default App;
