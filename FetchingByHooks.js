import React , {useState , useEffect} from 'react'
import axios from 'axios'

function FetchingByHooks() {
    const [post, setpost] = useState({})
    const [ID, setID] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ID}`)
        .then(response=>setpost (response.data))
        .catch(Error=>console.log(Error))
    },[ID])

    return (
        <div>
            <input type="text"  value={ID} onChange={(e)=>setID(e.target.value)}/>
            {/* <ul>
            {posts.map(post => <li key= {post.id}>{post.title}</li>)}
            </ul> */}
            <h3>{post.title}</h3>
        </div>
    )
}

export default FetchingByHooks
