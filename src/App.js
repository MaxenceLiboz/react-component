import React from "react";
import "./App.css";
import Card from "./components/Card";
import Table from "./components/Table";

function App() {
    return (
        <>
            <div className="container">
                <p>Creating components</p>
                <Card />
                <Table />
            </div>
        </>
    );
}

export default App;
