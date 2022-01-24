import React,{useState} from 'react'
import UseEffectHook3 from './UseEffectHook3'

function MouseMovetoggle() {
    const [Display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!Display)}>Toggle</button>
            {Display && <UseEffectHook3></UseEffectHook3>}
        </div>
    )
}

export default MouseMovetoggle
