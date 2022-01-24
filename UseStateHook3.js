import React , {useState} from 'react'
// import "./Todoitem.css"

function UseStateHook3() {
    const [Todos, setTodos] = useState([])
    const [n, setName] = useState('')
    const [d, setDesc] = useState('')
    let Submit=(e)=>{
        e.preventDefault();
        let todo={
            Todoname : n,
            Desc : d
        }
        setTodos([...Todos,todo])
    }
    const style ={
        border : "2px solid black",
        borderRadius: "5px",
        width: "8cm",
        margin: "1cm auto"
    }
    return (
        <div>
            <form onSubmit={e=>Submit(e)}>
                Name : <input type="text" value = {Todos.Todoname} onChange={e => setName(e.target.value)}/>
                Description : <input type="text" value = {Todos.Desc} onChange={e => setDesc(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <h2>Todos List</h2>
            <div id="Todoitem">
                {
                    Todos.length?(Todos.map(todo => <h3 key={todo.Todoname} style={style}>{todo.Todoname} {todo.Desc}</h3>)) : null
                }
            </div>
            
        </div>
    )
}

export default UseStateHook3
