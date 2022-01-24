import React, { useState , useEffect , useRef} from 'react'

function UseRefHook2() {
    const [Timer, setTimer] = useState(0)
    const intervalRef  = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Interval : {Timer}
            <button onClick = {()=> clearInterval(intervalRef.current)}>Clear</button>
        </div>
    )
}

export default UseRefHook2
