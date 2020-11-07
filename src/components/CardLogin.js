import React from "react";
import "../css/card.css";
import Button from "./Button";

/* ---------------------- Card's example ---------------------- */

export default function card() {
    return (
        <div className="card-container">
            <div className="card-group">
                <label>Email: </label>
                <input type="text" placeholder="example@gmail.com" />
                <label>Password: </label>
                <input type="password" placeholder="••••••••" />
                <div className="card-button">
                    <Button
                        variant="primary"
                        text="Login"
                        EnterKey="true"
                        onClick={(e) => console.log("Login")}
                    />
                    <div className="card-right">
                        <p>Create an account:</p>
                        <Button
                            text="Singup"
                            onClick={(e) => console.log("Signup")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
