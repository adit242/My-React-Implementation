import React ,{useState , useMemo} from 'react'

function UseMemoHook() {
    const [Count1, setCount1] = useState(0)
    const [Count2, setCount2] = useState(0) 
    const isEven = useMemo(() => {
        let i=0;
        while(i<2000000000) i++
        return Count1 % 2 === 0;
    }, [Count1])
    return (
        <div>
            <button onClick={()=>setCount1(Count1 + 1)}>{Count1}</button>
            <span>{isEven ? "Even" : "Odd"}</span>
            <button onClick={()=>setCount2(Count2 + 1)}>{Count2}</button>
        </div>
    )
}

export default UseMemoHook
