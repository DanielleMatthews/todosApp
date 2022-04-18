import { useNavigate, useParams } from 'react-router-dom'
import { editTodo, oneTodo } from '../services/getRequests'
import { useEffect, useState } from 'react'

export default function New(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({}) //why {}? bc object 

    useEffect(() => {
        oneTodo(id) //get todo that matches this id 
        .then(res => setData(res.data)) //changes state data from response from api
    }, []) //[] to prevent continuous loop 

    const editTheTodo = event =>{
        event.preventDefault()
        const updatedTodo = {description: event.target.description.value, complete: event.target.complete.checked}
        editTodo(id, updatedTodo)
        navigate(`/${id}`)
    }

    return(
        <div> 
        <h1> Edit a To Do</h1>
        <form onSubmit={editTheTodo} id="newForm">
            Description: <input type="text" name="description" defaultValue={data.description}/> <br/> 
            Complete: <input type="checkbox" name="complete" defaultChecked={data.complete}/> <br/>
            <input type="submit" value="Edit Task"/>
        </form>
        </div>
    )
}