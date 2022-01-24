import React, { Component } from 'react'

export default class Statechange extends Component {
    constructor(){
        super();
        this.state={ReadMe:false};
        this.ChangeReadMore=this.ChangeReadMore.bind(this);
    }
    ChangeReadMore(){
       this.setState({ReadMe: !this.state.ReadMe})
    }
    render() {
        return (
            <div>
                <h2>This is a hidden para for class state and binding purppose .</h2>
                {
                    this.state.ReadMe?
                    (
                        <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur ratione modi qui, totam quas vitae, at quae, explicabo dicta aliquid harum corporis incidunt porro odit ducimus sequi fuga. Excepturi.</p>
                        <button onClick={this.ChangeReadMore}>See less</button>
                        </div>
                    ):<button onClick={this.ChangeReadMore}>See More</button>
                }
                
            </div>
        )
    }
}
