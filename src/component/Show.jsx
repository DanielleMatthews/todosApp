import { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { oneTodo, deleteTodo } from '../services/getRequests'

export default function Show(){
    const navigate = useNavigate()
    const { id } = useParams()
    const [item, setItem] = useState({}) 
    const [style, setStyle] = useState("not-complete")
    
    useEffect(()=>{
        oneTodo(id)
        .then(res=> setItem(res.data))
    }, [])

    const deleteTheTodo = () =>{
        deleteTodo(id)
        navigate('/')
    }
    
    const completeTask = () =>{
        console.log("clicked complete")
        setStyle("completed")
    }
    return(
        <div id="show">
            <h1> Task  </h1>    
            <h3 className={style}> {item.description} </h3>
            <button onClick={completeTask}> Complete Task </button> <br/>
            <button onClick={()=> {navigate(`/${id}/edit`)}}> Edit </button>
            <button onClick={deleteTheTodo}> Delete </button>
        </div>
    )
}