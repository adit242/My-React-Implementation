import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        this.inref=React.createRef()
        this.callbackref=null
        this.Callback=(element)=>{
            this.callbackref=element
        }
    }
    componentDidMount(){
        // this.inref.current.focus()
        this.callbackref.focus()
    }
    buttonhandle=()=>{
        alert(this.inref.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inref}/>
                <input type="text" ref={this.Callback}/>
                <button onClick={this.buttonhandle}>Hiii</button>
            </div>
        )
    }
}

export default Refs
