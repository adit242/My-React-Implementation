import React, { useReducer } from 'react'
let initialState = {
    firstCount : 0,
    secondCount : 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state,firstCount : state.firstCount + action.value }
        case "increment 2":
            return {...state,secondCount : state.secondCount + action.value }
        case "decrement":
            return {...state,firstCount : state.firstCount - action.value};
        case "decrement 2":
            return {...state,secondCount : state.secondCount - action.value};    
        case "reset":
            return initialState;
        default:
            return state;
    }
}
function UseReducerHook1() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div> FirstCount : {count.firstCount} SecondCount : {count.secondCount}</div>
            <button onClick={() => dispatch({type : 'increment' , value : 1})}>Increment</button>
            <button onClick={() => dispatch({type : 'decrement',value : 1})}>Decrement</button>
            <button onClick={() => dispatch({type : 'increment 2' , value : 1})}>Increment 2</button>
            <button onClick={() => dispatch({type : 'decrement 2' , value : 1})}>Decrement 2</button>
            <button onClick={() => dispatch({type : 'increment' , value : 5})}>Increment by 5</button>
            <button onClick={() => dispatch({type : 'decrement',value : 5})}>Decrement by 5</button>
            <button onClick={() => dispatch({type : 'increment 2' , value : 5})}>Increment 2 by 5</button>
            <button onClick={() => dispatch({type : 'decrement 2' , value : 5})}>Decrement 2 by 5</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>

        </div>
    )
}

export default UseReducerHook1
