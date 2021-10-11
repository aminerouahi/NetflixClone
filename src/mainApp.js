import React from 'react';
import './mainApp.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function mainApp() {
    return (
        <div className="mainApp">
            <Router>
                <Switch>
                    <Route path="/test">
                        <h1>this is a test</h1>
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>

            </Router >

        </div >
    )
}

export default mainApp

