import {useState} from 'react'

function CustomIncDecHook(initState = 0) {
    const [Count, setCount] = useState(initState)
    const Increment = () => {
        setCount(Count + 1)
    }
    const Decrement = () => {
        setCount(Count - 1)
    }
    const Reset = () => {
        setCount(initState)
    }
    return [Count , Increment , Decrement , Reset]
}

export default CustomIncDecHook
