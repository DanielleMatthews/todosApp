import { todoList } from '../services/getRequests'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    const[items, setItems] = useState([])
    const [style, setStyle] = useState('not-complete')
    
    useEffect(()=>{
        todoList()
        .then(res=> setItems(res.data))
    }, [])
    console.log(items)
    
    return(
        <div>
            <h1> To Dos.... </h1>
                <button onClick={()=> {navigate("/new")}}> New To Do </button>
            <ul>
                {items.map((item, i)=>(
                    <li key={i}>
                        <a href= {`http://localhost:3000/${item._id}`} id="task"> {item.description} </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}