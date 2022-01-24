import React, { useState , useEffect } from 'react'

function UseEffectHook3() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    let logMousePosition=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("mouse event");
        window.addEventListener('mousemove',logMousePosition);
        
        return ()=>
        {
            console.log("Unmounting code");
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[])
    
    return (
        <div>
            X : {X} , Y : {Y}
        </div>
    )
}

export default UseEffectHook3
