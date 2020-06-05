import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Items from './Components/Items';
import Home from './Components/Home';
import Planets from './Components/Planets';

class App extends React.Component {
    render() {
        return(
        <Router>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/planets'} className="nav-link"> Planets </Link></li>
                    <li><Link to={'/planets/add'} className="nav-link"> Add Planet </Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/planets' component={Planets} />
                    <Route path='/planets/add' />
                </Switch>
            </div>
        </Router>
        );
    }
}

export default App;
