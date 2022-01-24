import React from 'react'
import useInput from './useInput'

function InputCustHook() {
    const[firstName , FirstObj ,setFirstName , resetFirstName] = useInput('')
    const[lastName , LastObj ,setLastName , resetLastName] = useInput('')
    const Reset =(e) => {
        e.preventDefault()
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit = {Reset}>
                <label>FirstName</label>
                <input {...FirstObj} value={firstName} onChange = {e=>setFirstName(e.target.value)} type="text" />
                <label>LastName</label>
                <input {...LastObj} value={lastName} onChange = {e=>setLastName(e.target.value)} type="text" />
                <button type="submit">submit</button>
            </form>
            <div>FirstName : {firstName}</div>
            <div>LastName : {lastName}</div>
        </div>
    )
}

export default InputCustHook
