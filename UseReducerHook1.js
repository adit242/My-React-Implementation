import React, { useReducer } from 'react'
let initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state;
    }
}
function UseReducerHook1() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div> Count : {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

        </div>
    )
}

export default UseReducerHook1
