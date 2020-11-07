import React from "react";
import Button from "./Button";

export default function Card() {
    return (
        <div className="card-container">
            <div className="card-title">
                <h2>Dryland</h2>
            </div>
            <div className="card-group">
                <textarea
                    disabled
                    className="transparent"
                    value="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint dolore placeat perspiciatis cumque sit accusamus, non
                    incidunt ipsam maxime? Dignissimos eaque corporis facere ab
                    eos? Tenetur quisquam quas ex laborum."
                />
            </div>
            <div className="card-group">
                <textarea
                    className="transparent"
                    defaultValue="Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sint dolore placeat
                    perspiciatis cumque sit accusamus, non incidunt ipsam
                    maxime? Dignissimos eaque corporis facere ab eos? Tenetur
                    quisquam quas ex laborum."
                ></textarea>
            </div>
            <div className="card-button-centered">
                <Button variant="primary" text="Menu" />
                <Button variant="primary" text="Modify" />
            </div>
        </div>
    );
}
