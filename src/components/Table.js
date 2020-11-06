import React from "react";
import "../css/table.css";

export default function Table() {
    return (
        <table className="table">
            <tbody>
                <tr className="table-header">
                    <td className="table-header">Subject</td>
                    <td className="table-header">Title</td>
                    <td className="table-header">Format</td>
                </tr>
                <tr className="table-body">
                    <td>One</td>
                    <td>Two</td>
                    <td>Three</td>
                </tr>
                <tr className="talbe-body">
                    <td>Four</td>
                    <td>Five</td>
                    <td>Six</td>
                </tr>
                <tr className="talbe-body">
                    <td>Seven</td>
                    <td>Eight</td>
                    <td>Nine</td>
                </tr>
                <tr className="talbe-body">
                    <td>Seven</td>
                    <td>Eight</td>
                    <td>Nine</td>
                </tr>
            </tbody>
        </table>
    );
}
