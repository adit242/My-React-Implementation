import React, { Component } from 'react'

class RenderProp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            click: 0
        }
    }
    ClickedInc = () => {
        this.setState({
            click:  this.state.click  + 1
        })
    }
    render() {
        return (
            <h1>
                {this.props.render(this.state.click,this.ClickedInc)}
            </h1>
        )
    }
}

export default RenderProp
