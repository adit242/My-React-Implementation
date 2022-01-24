import React, { Component } from 'react'
import Context from './ContextCreate';

class ContextT extends Component {
    static contextType = Context
    render() {
        return (
            <div>
                Hoooo {this.context}
            </div>
        )
    }
}
export default ContextT
