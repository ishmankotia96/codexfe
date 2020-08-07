import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';

export default class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/contact"} component={Contact} />
                </Switch>
            </Router>
        )

    }
}
