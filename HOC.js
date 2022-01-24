import React from 'react'
// This is the tut for Higher Order Component . this reduces the code rewriting .
const updatedComponent = OriginalComponent => {

    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                hovor: 0
            }
        }
        // this.setState(prevState => {
        //     return { hovor: prevState.hovor + 1 }
        // } this is also valid .
        HoverChange = () => {
            this.setState({
                hovor: this.state.hovor + 1
            }
            )
        }
        render() {
            return <OriginalComponent hovor={this.state.hovor} HoverChange= {this.HoverChange} 
            {...this.props}/> // now ... this is used to pass remaining args.
        }
    }
    return NewComponent;

}
export default updatedComponent