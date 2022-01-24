import React, { useState } from 'react'
import useTitle from "./useCustomTitleHook";

function ClickCounterHookCust() {
    const [count, setcount] = useState(0)
    useTitle(count) 
    return (
        <div>
            <button onClick={() => setcount(count + 1)}>Clicked {count}</button>
        </div>
    )
}

export default ClickCounterHookCust
