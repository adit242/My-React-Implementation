import React, { useState } from 'react'

function UseStateHook1() {
    let EmpInit = []
    const [Emp, setEmp] = useState(EmpInit)
    let setArray = () => {
        setEmp([...Emp, (Math.random() * 10 + 1)])
    }
    console.log(Emp);
    return (
        <div>
            <button type="submit" onClick={setArray}>Submit</button>
            <ul>
                {Emp.map(e => <li type={"1"}> {e} </li>)}
            </ul>
        </div>
    )
}

export default UseStateHook1
