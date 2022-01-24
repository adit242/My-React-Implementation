import React, { Component } from 'react'

export default class Welcomeclass extends Component {
    constructor(){
        super();
        this.name="Aditya";
    }
    render() {
        return (
                <h1>Welcome to the class Component {this.name} </h1>
        )
    }
}
