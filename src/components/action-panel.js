import React, { Component } from "react";
import "../App.css";

class ActionPanel extends Component {
    render() {
        return (
            <div className="m-auto">
                <img
                    className="clickable"
                    src={require("../assets/icons/action-panel/Add.png")}
                    alt="Add to video"
                />
            </div>
        );
    }
}

export default ActionPanel;
