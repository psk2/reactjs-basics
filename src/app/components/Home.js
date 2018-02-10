import React, { Component } from "react";

export class Home extends Component {
    render() {
        console.log('this.props',this.props);
        return (
            <div>
                <p>Hey in a new Comonent...</p>
                <p>Your name is {this.props.name}</p>
            </div>
        )
    }
}