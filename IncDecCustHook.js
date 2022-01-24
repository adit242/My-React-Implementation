import React ,{useState}from 'react'
import useIncDec from "./useCustomIncDecHook";

function IncDecCustHook() {
    const [Count , Increment , Decrement , Reset] = useIncDec(0)
        return (
        <div>
            <div>Count : {Count}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default IncDecCustHook
