import {useState} from 'react'

function useInput() {
    const [value, setvalue] = useState('')
    const valObj = {
        value,
        onChange : e =>{
            setvalue(e.target.value)
        }
    }
    const resetName = () => {
        setvalue('')
    }
    return [value , valObj , setvalue , resetName]
}

export default useInput
