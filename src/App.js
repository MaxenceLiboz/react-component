import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CardLogin from "./components/CardLogin";
import Card from "./components/Card";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Router>
                <Route path="/" component={Navbar} />
                <div className="container">
                    <Route path="/card" component={Card} />
                    <Route path="/cardLogin" component={CardLogin} />
                    <Route path="/table" component={Table} />
                </div>
            </Router>
        </>
    );
}

export default App;
