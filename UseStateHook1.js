import React, { useState } from 'react'

function UseStateHook1() {
    const [count, setcount] = useState(0)
    return (
        <div>
            Count : {count}
            <button onClick={() => setcount(count + 1)}>INC</button>
            <button onClick={() => setcount(count - 1)}>DEC</button>
            <button onClick={() => setcount(0)}>RST</button>

        </div>
    )
}

export default UseStateHook1
