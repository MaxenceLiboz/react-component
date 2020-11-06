import React from "react";
import "../css/button.css";

/* ---------------------- Button ---------------------- */

export default function Button({
    text,
    variant,
    width,
    onClick,
    EnterKey,
    color,
}) {
    let id;
    if (EnterKey === "true") {
        id = "btn";
        // Execute a function when the user releases a key on the keyboard
        window.addEventListener("keyup", function (e) {
            // Number 13 is the "Enter" key on the keyboard
            if (e.keyCode === 13) {
                // Cancel the default action, if needed
                e.preventDefault();
                // Trigger the button element with a click
                document.getElementById("btn").click();
            }
        });
    }

    console.log(color);
    return (
        <p id={id} className={`btn ${variant}`} onClick={onClick}>
            {text}
        </p>
    );
}
