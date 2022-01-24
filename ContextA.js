import React from 'react'
import { ContextConsumer } from "./ContextCreate";

class ContextA extends React.Component {
    render() {
        return (
            <ContextConsumer>
                {
                    Name => {
                        return (
                            <h1>Hiii {Name}
                            </h1>
                            
                        )
                    }
                }
            </ContextConsumer>
        )
    }
}

export default ContextA
