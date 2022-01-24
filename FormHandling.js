import React, { Component } from 'react'

class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            naav: "",
            age: "",
            description : "Enter about yourself . ",
            topic : "Cricket"
        }

    }
    ChangeNaav = (e) => {
        this.setState({
            naav: e.target.value
        })
    }
    AgeHandler = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    Commented=(e)=>{
        this.setState({
            description : e.target.value
        })
    }
    topicChange=(e)=>{
        this.setState({
            topic : e.target.value
        })
    }
    onsubmitHandle=(e)=>{
        alert(`Hiii ${this.state.naav} Form is submitted ......`);
        // e.preventDefault(); /*prevents reloading on submit */
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmitHandle}>
                    <div>
                        <label htmlFor="Hiii">Name: </label>
                        <input type="text" value={this.state.naav} onChange={this.ChangeNaav} />
                    </div>
                    <div>
                        <label htmlFor="">Age  :</label>
                        <input type="number" value={this.state.age} onChange={this.AgeHandler} />
                    </div>
                    <div>
                        <label htmlFor="">Description  :</label>
                        <textarea value ={this.state.description} onChange={this.Commented} cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Topic : </label>
                        <select value= {this.state.topic} onChange={this.topicChange}>
                            <option value="Cricket">Aayushya</option>
                            <option value="Abhyaas">Manache Kashta</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormHandling
