import React , {useRef, useEffect} from 'react'

function UseRefHook1() {
    const refFocus = useRef(null)
    useEffect(() => {
        refFocus.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref = {refFocus}/>
        </div>
    )
}

export default UseRefHook1
