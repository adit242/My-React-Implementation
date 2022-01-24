import React, { useEffect, useState } from 'react'

function UseEffectHook1() {
    const [Count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`You clicked ${Count} Times`
    })
    return (
        <div>
            <button onClick={()=>setCount(Count + 1)}>Clicked {Count} Times</button>
        </div>
    )
}

export default UseEffectHook1
