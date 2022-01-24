import React, { Component } from 'react'

class ClickCount extends Component {
    constructor(props)
    {
        super()
    }
    render() {
        const { click , ClickedInc} = this.props;
        return (
            <button onClick={ClickedInc}>You Clicked {click} Times</button>
        )
    }
}

export default ClickCount
