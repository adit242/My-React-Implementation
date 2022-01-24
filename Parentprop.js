import React, { Component } from 'react'
import Childprop from "./Childprop";

export class Parentprop extends Component {
    constructor(props){
        super(props);
        this.welcome=this.welcome.bind(this);
    }
    welcome() {
        alert("Hiiii Everyone");
    }
    render() {
        return (
            <div>
                <Childprop name={this.welcome}></Childprop>
                {/* here child is imported and also using Childprop welcome method is passed as props in Childprop */}
            </div>
        )
    }
}

export default Parentprop
