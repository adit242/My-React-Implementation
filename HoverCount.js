import React, { Component } from 'react'
import updatedComponent from './HOC';

class Hover extends Component {
    render() {
        let style = {
            color : "blue",
            fontFamily : "New Times Roman",
            border : "2px solid green",
            backgroundColor: "chartreuse",
            width : "40%",
            margin : "10px auto"
        }
        let { hovor, HoverChange } = this.props;
        return (
            // here name is passed from App.js . Now it is sent to HOC.js to make a new updated component after Export.
            <h1 onMouseOver={HoverChange} style = {style}>{this.props.name} You Hovered {hovor} Times </h1> 
        )
    }
}

export default updatedComponent(Hover)
