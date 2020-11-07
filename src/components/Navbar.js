import React from "react";
import "../css/navbar.css";
import { GiSportMedal } from "react-icons/gi";

export default function Newnavbar(props) {
    const { history } = props;

    return (
        <>
            <div className="nav-container">
                <div className="nav-brand">
                    <GiSportMedal
                        onClick={() => history.push("/")}
                        size="3em"
                        color="white"
                    />
                </div>
                <div className="nav-left-container">
                    <ul>
                        <li onClick={() => history.push("/table")}>Table</li>
                        <li onClick={() => history.push("/card")}>Card</li>
                        <li onClick={() => history.push("/cardLogin")}>
                            CardLogin
                        </li>
                    </ul>
                </div>
                <div className="nav-right-container">
                    <ul>
                        <li>Right container</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
