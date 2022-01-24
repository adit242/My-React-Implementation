import React, { Component } from 'react'

export default class HellpropsClass extends Component {
    render() {
        return (
            <div>
                <h2>this is {this.props.name}</h2>
            </div>
        )
    }
}
