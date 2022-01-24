import React, { useState, useEffect } from 'react'

function UseEffectHook2() {
    const [Count, setCount] = useState(0)
    const [Name, setName] = useState('')
    useEffect(()=>{
        document.title = `You Clicked ${Count} Times`
    },[Count]) //This [Count] is a dependency list i.e. if Count is Changeed then only the UseEffect will run.
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(Count + 1)}>clicked {Count} Times</button>
        </div>
    )
}

export default UseEffectHook2
